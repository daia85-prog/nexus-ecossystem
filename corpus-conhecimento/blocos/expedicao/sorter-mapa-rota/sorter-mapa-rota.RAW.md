# sorter-mapa-rota.RAW — Evidência Bruta

<!-- APPEND-ONLY — gerado pelo roteador (corpus-full.jsonl) -->

---
**Origem:** [I23.3502] 2025 — `I23.3502 - PROJETO PETER 2 - ESPECIFICAO DE SOFTWARE.docx`  
**Heading:** Mapa de Sorter  
**Score:** — (nome-topico) | **ID:** 56d8a20eb6accdbc

O WCS terá uma funcionalidade robusta que permitirá à operação definir as rampas de saída vinculadas a diferentes critérios. As configurações do mapa de sorter podem ser definidas por transportadora (JADLOG), pedido (PEDIDO Y) ou destino (LOJA X, SÃO PAULO).
Essa funcionalidade proporcionará flexibilidade, permitindo a criação de diversos layouts pré-definidos para o mapa de sorter, que poderão ser facilmente trocados conforme a necessidade operacional. A operação terá autonomia para alterar esses vínculos diretamente na tela de configuração do mapa de sorter no sistema WCS sempre que necessário, sem depender de ajustes nativos do sistema.

---
**Origem:** [I23.3503] 2025 — `I23.3503- ESPECIFICACAO DE SOFTWARE - PROJETO Eletro REV ..docx`  
**Heading:** Funcionalidade de Mapa de Sorter no WCS  
**Score:** — (nome-topico) | **ID:** 0e254b1fe454341c

O WCS terá uma funcionalidade robusta que permitirá ao cliente definir as rampas vinculadas a cada transportadora. Essa funcionalidade proporcionará flexibilidade na operação, permitindo a criação de diversos layouts pré-definidos para o mapa de sorter, que poderão ser trocados conforme as necessidades operacionais do cliente.
Definição do Mapa de Sorter: O cliente poderá vincular uma rampa específica a cada transportadora de acordo com sua operação logística. Isso garante que os volumes sejam enviados para as rampas corretas, alinhando o fluxo de separação e expedição aos requisitos do cliente. No momento do cadastro da rampa, haverá a opção de defini-la como PA (Posto Avançado). Essa informação será retornada ao WMS conforme a Integração 6.2 – Desvio no Sorter (WCS → WMS).
Com base no destino configurado no mapa do sorter, o WCS deverá enviar ao WMS, na integração de volumes desviados, o atributo PA, indicando se o volume foi direcionado para Posto Avançado ou não.
Essa definição será realizada diretamente no mapa do sorter, permitindo a configuração de destinos distintos para a mesma loja.
Exemplo de destinos configurados no mapa: “BRASPRESS” e “BRASPRESS PA”.
OBS: O agrupador não pode ser vinculado a mais de uma rampa. Caso já esteja associado a uma rampa, será automaticamente desvinculado para permitir o novo vínculo, sem necessidade de intervenção manual, a troca de agrupador deve ser realizada sem volumes pendentes para passar pelo sorter, pois, caso contrário, os volumes restantes serão direcionados para o rejeito com o motivo “SEM ROTA”.
A Invent orienta que a troca de mapa de sorter seja feita com a operação parada por motivo para garantir a viabilidade dos desvios.
Criação de Layouts Pré-definidos: O sistema permitirá a criação de layouts pré-definidos de mapas de sorter. Cada layout conterá as rampas específicas para diferentes transportadoras ou rotas, otimizando o processo de desvio dos volumes.
Facilidade de Troca de Layouts: A funcionalidade é projetada para trocas rápidas e simples entre diferentes layouts. Isso oferece ao cliente liberdade operacional, permitindo que o layout do mapa de sorter seja alterado conforme a demanda da operação, sem interrupções significativas.
Liberdade Operacional: A capacidade de alterar rapidamente o layout do mapa de sorter é essencial para que o cliente tenha controle total sobre o processo de expedição. Isso é especialmente útil em cenários de mudança de rotas ou quando há ajustes nos requisitos de transporte, como novas transportadoras ou ajustes em prioridades de rota.
Benefícios da Funcionalidade:
Flexibilidade: Capacidade de adaptar rapidamente o fluxo de trabalho conforme mudanças no processo logístico.
Eficiência: Melhoria na eficiência da operação, já que os volumes serão desviados para as rampas corretas sem necessidade de intervenções manuais.
Escalabilidade: O cliente pode criar múltiplos layouts e alternar entre eles conforme o volume de operações ou mudanças nos requisitos logísticos.

---
**Origem:** [I23.3503] 2025 — `I23_3503_ESPECIFICACAO_DE_SOFTWARE_PROJETO_Eletro_REV8 (1).docx`  
**Heading:** Funcionalidade de Mapa de Sorter no WCS  
**Score:** — (nome-topico) | **ID:** 27844bcec03b1db5

O WCS terá uma funcionalidade robusta que permitirá ao cliente definir as rampas vinculadas a cada transportadora. Essa funcionalidade proporcionará flexibilidade na operação, permitindo a criação de diversos layouts pré-definidos para o mapa de sorter, que poderão ser trocados conforme as necessidades operacionais do cliente.
Definição do Mapa de Sorter: O cliente poderá vincular uma rampa específica a cada transportadora de acordo com sua operação logística. Isso garante que os volumes sejam enviados para as rampas corretas, alinhando o fluxo de separação e expedição aos requisitos do cliente. No momento do cadastro da rampa, haverá a opção de defini-la como PA (Posto Avançado). Essa informação será retornada ao WMS conforme a Integração 6.2 – Desvio no Sorter (WCS → WMS).
Com base no destino configurado no mapa do sorter, o WCS deverá enviar ao WMS, na integração de volumes desviados, o atributo PA, indicando se o volume foi direcionado para Posto Avançado ou não.
Essa definição será realizada diretamente no mapa do sorter, permitindo a configuração de destinos distintos para a mesma loja.
Exemplo de destinos configurados no mapa: “BRASPRESS” e “BRASPRESS PA”.
OBS: O agrupador não pode ser vinculado a mais de uma rampa. Caso já esteja associado a uma rampa, será automaticamente desvinculado para permitir o novo vínculo, sem necessidade de intervenção manual, a troca de agrupador deve ser realizada sem volumes pendentes para passar pelo sorter, pois, caso contrário, os volumes restantes serão direcionados para o rejeito com o motivo “SEM ROTA”.
A Invent orienta que a troca de mapa de sorter seja feita com a operação parada por motivo para garantir a viabilidade dos desvios.
Criação de Layouts Pré-definidos: O sistema permitirá a criação de layouts pré-definidos de mapas de sorter. Cada layout conterá as rampas específicas para diferentes transportadoras ou rotas, otimizando o processo de desvio dos volumes.
Facilidade de Troca de Layouts: A funcionalidade é projetada para trocas rápidas e simples entre diferentes layouts. Isso oferece ao cliente liberdade operacional, permitindo que o layout do mapa de sorter seja alterado conforme a demanda da operação, sem interrupções significativas.
Liberdade Operacional: A capacidade de alterar rapidamente o layout do mapa de sorter é essencial para que o cliente tenha controle total sobre o processo de expedição. Isso é especialmente útil em cenários de mudança de rotas ou quando há ajustes nos requisitos de transporte, como novas transportadoras ou ajustes em prioridades de rota.
Benefícios da Funcionalidade:
Flexibilidade: Capacidade de adaptar rapidamente o fluxo de trabalho conforme mudanças no processo logístico.
Eficiência: Melhoria na eficiência da operação, já que os volumes serão desviados para as rampas corretas sem necessidade de intervenções manuais.
Escalabilidade: O cliente pode criar múltiplos layouts e alternar entre eles conforme o volume de operações ou mudanças nos requisitos logísticos.

---
**Origem:** [I24.203] 2025 — `I24.203 - Especificação de Software - Projeto Beta-ATT.docx`  
**Heading:** Se a Transportadora NÃO realiza Paletização  
**Score:** — (semantico) | **ID:** 79bf8d5c559dad53

Quando configurado como “Não”, o sistema deve:
Processar o volume no sorter.
Desviar para a rampa correta conforme Mapa de Sorter.
Registrar o desvio.
atualiza o status do volume e atualiza o dashboard da rampa.
Encerrar o fluxo do volume.
Permitir que a transportadora retire os volumes diretamente das rampas.

---
**Origem:** [I24.215] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP.docx`  
**Heading:** Mapa de Sorter  
**Score:** — (nome-topico) | **ID:** 66be65d4e61d93ce

O WCS terá uma funcionalidade robusta que permitirá a operação definir as rampas vinculadas a cada Transportadora ou romaneio. Essa funcionalidade proporcionará flexibilidade na operação, permitindo a criação de diversos layouts pré-definidos para o mapa de sorter, que poderão ser facilmente trocados conforme a necessidade operacional.
Definição do Mapa de Sorter: A operação poderá vincular uma rampa específica a uma transportadora ou romaneio de acordo com sua operação logística. Isso garante que os volumes sejam enviados para as rampas corretas, alinhando o fluxo de separação e expedição aos requisitos da operação.
OBS: Caso não seja alocado um romaneio a Rampa o WCS irá alocar os romaneios de forma automática. Só será possível alocar romaneios ainda não iniciados.

---
**Origem:** [I24.215] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJETO BP REV .2.docx`  
**Heading:** Mapa de Sorter  
**Score:** — (nome-topico) | **ID:** 73df85c129de3908

O WCS terá uma funcionalidade robusta que permitirá a operação definir as rampas vinculadas a cada Transportadora ou romaneio. Essa funcionalidade proporcionará flexibilidade na operação, permitindo a criação de diversos layouts pré-definidos para o mapa de sorter, que poderão ser facilmente trocados conforme a necessidade operacional.
Definição do Mapa de Sorter: A operação poderá vincular uma rampa específica a uma transportadora ou romaneio de acordo com sua operação logística. Isso garante que os volumes sejam enviados para as rampas corretas, alinhando o fluxo de separação e expedição aos requisitos da operação.
OBS: Caso não seja alocado um romaneio a Rampa o WCS irá alocar os romaneios de forma automática. Só será possível alocar romaneios ainda não iniciados.

---
**Origem:** [I24.215] 2025 — `I24_215_ESPECIFICACAO_SOFTWARE_PROJ_BP_Rev12.docx`  
**Heading:** Mapa de Sorter  
**Score:** — (nome-topico) | **ID:** b42c9bfe1790e107

O WCS terá uma funcionalidade robusta que permitirá a operação definir as rampas vinculadas a cada Transportadora ou romaneio. Essa funcionalidade proporcionará flexibilidade na operação, permitindo a criação de diversos layouts pré-definidos para o mapa de sorter, que poderão ser facilmente trocados conforme a necessidade operacional.
Definição do Mapa de Sorter: A operação poderá vincular uma rampa específica a uma transportadora ou romaneio de acordo com sua operação logística. Isso garante que os volumes sejam enviados para as rampas corretas, alinhando o fluxo de separação e expedição aos requisitos da operação.
OBS: Caso não seja alocado um romaneio a Rampa o WCS irá alocar os romaneios de forma automática. Só será possível alocar romaneios ainda não iniciados.

---
**Origem:** [I25.3513] 2025 — `2- ESPECIFICACAO DE SOFTWARE - PROJETO ESCOPO CDSK-Revisado.docx`  
**Heading:** Funcionalidade de Mapa de Sorter no WCS  
**Score:** — (nome-topico) | **ID:** 166107fbb3aa3b54

O WCS terá uma funcionalidade robusta que permitirá a operação definir as rampas vinculadas a cada Loja e Categoria do Produto e Podendo habilitar a função de separar por Tipo de Embalagem (Caixa e Fardo). Essa funcionalidade proporcionará flexibilidade na operação, permitindo a criação de diversos layouts pré-definidos para o mapa de sorter, que poderão ser facilmente trocados conforme a necessidade operacional.
Definição do Mapa de Sorter: A operação poderá vincular uma rampa específica a uma Loja e Categoria do Produto e Tipo de Embalagem de acordo com sua operação logística. Isso garante que os volumes sejam enviados para as rampas corretas, alinhando o fluxo de separação e expedição aos requisitos da operação.
OBS: O agrupador pode ser vinculado a mais de uma rampa simultaneamente. Caso o destino já esteja associado a uma rampa, o WCS deve cadenciar esses volumes para não sobrecarregar uma única rampa dividindo a ordem de desvios entre as rampas com o destino vinculado.
Criação de Layouts Pré-definidos: O sistema permitirá a criação de layouts pré-definidos de mapas de sorter. Cada layout conterá as rampas específicas para diferentes Lojas e Categoria do Produto, Tipo de Embalagem, otimizando o processo de desvio dos volumes.
Facilidade de Troca de Layouts: A funcionalidade é projetada para trocas rápidas e simples entre diferentes layouts. Isso oferece a operação liberdade operacional, permitindo que o layout do mapa de sorter seja alterado conforme a demanda da operação, sem interrupções significativas.
Liberdade Operacional: A capacidade de alterar rapidamente o layout do mapa de sorter é essencial para que a operação tenha controle total sobre o processo de expedição. Isso é especialmente útil em cenários de mudança de rotas ou quando há ajustes nos requisitos de transporte, como novas transportadoras ou ajustes em prioridades de rota.
Benefícios da Funcionalidade:
Flexibilidade: Capacidade de adaptar rapidamente o fluxo de trabalho conforme mudanças no processo logístico.
Eficiência: Melhoria na eficiência da operação, já que os volumes serão desviados para as rampas corretas sem necessidade de intervenções manuais.
Escalabilidade: A operação pode criar múltiplos layouts e alternar entre eles conforme o volume de operações ou mudanças nos requisitos logísticos.

---
**Origem:** [I25.3515] ADITIVO — `I25.3515 - ESPECIFICACAO DE SOFTWARE - PROJETO ESPERANCA REV .7.docx`  
**Heading:** Mapa Sorter  
**Score:** — (nome-topico) | **ID:** 842c6d0c7bef0b35

O mapa do sorter é funcionalidade essencial do WCS, que define os destinos (rotas/clientes) vinculados às rampas. O primeiro cadastro é feito pela Invent, e as alterações posteriores ficam sob responsabilidade do cliente. O sistema permite diversos layouts de sorter, possibilitando alternância entre configurações previamente cadastradas conforme necessidades operacionais (por turno, cliente, tipo de carga etc.). Todas as interações com o sorter e os PTLs seguem o mapa ativo.
As rampas serão cadastradas pelo time Invent, todas as interações do time Comercial Esperança com o WCS serão previamente explicadas junto ao treinamento sistêmico que será ministrado junto ao time operacional do CD em Arujá.

---
**Origem:** [I25.3515] ADITIVO — `I25.3515 - ESPECIFICACAO DE SOFTWARE - PROJETO ESPERANCA REV .7.docx`  
**Heading:** Mapa do Sorter  
**Score:** — (nome-topico) | **ID:** a9388e2ab2205e58

Define os destinos (rotas/clientes) vinculados às rampas. O primeiro cadastro é feito pela Invent, alterações posteriores são de responsabilidade do Comercial Esperança.
O sistema permite diversos layouts de sorter, possibilitando alternância entre configurações previamente cadastradas conforme necessidades operacionais (por turno, cliente, tipo de carga etc.). Todas as interações com o sorter e os PTLs seguem o mapa ativo.

---
**Origem:** [I25.8049] 2025 — `I25.8049 - ESPECIFICACAO DE SOFTWARE - PROJETO TITANO REV.docx`  
**Heading:** Alteração na Etiqueta do Cliente  
**Score:** — (semantico) | **ID:** bd52258768b2307c

Atualmente, o sorter existente realiza os desvios com base em um código fixado na etiqueta, que já informa diretamente a rampa de destino.
No novo modelo, o cliente realizará uma alteração na composição da etiqueta:
O código de barras que informava diretamente a rampa será alterado;
Em seu lugar será utilizado um código já existente no processo, que representa o número do volume.
Com essa alteração:
O sorter passará a utilizar o número do volume para consultar a rota enviada pelo WMS;
O processo de desvio deixa de ser fixo e passa a ser dinâmico e controlado pelo WMS, aumentando a rastreabilidade e a flexibilidade operacional.
Alteração Da etiqueta atual:

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE2-REV2-s.docx`  
**Heading:** Remoção do Item  
**Score:** — (semantico) | **ID:** 0d51f5d8a4726145

• O operador inicia a operação realizando a leitura do endereço de origem.
• O operador seleciona a quantidade a ser retirada e confirma a retirada.

---
**Origem:** [I25.111] 2026 — `I25.111 - Especificação de Software - Projeto Beta Full SP.docx`  
**Heading:** Se a Transportadora NÃO realiza Paletização  
**Score:** — (semantico) | **ID:** 7585a21369d887ab

Quando configurado como “Não”, o sistema deve:
Processar o volume no sorter.
Desviar para a rampa correta conforme Mapa de Sorter.
Registrar o desvio.
atualiza o status do volume e atualiza o dashboard da rampa.
Encerrar o fluxo do volume.
Permitir que a transportadora retire os volumes diretamente das rampas.

---
**Origem:** [I25.115] 2026 — `I25.115 - ESPECIFICATION DE SOFTWARE - PROYECTO MARKET PERU - Rev..docx`  
**Heading:** Funcionalidad de mapas del sorter en WCS  
**Score:** — (nome-topico) | **ID:** 99e6f16c7589a5a9

El WCS tendrá una funcionalidad robusta que permitirá a la operación definir los PTLs vinculados a cada Tienda y Tipo de Producto, y también puede permitir la función de separar por Tipo de Empaque. Esta funcionalidad proporcionará flexibilidad en la operación, permitiendo la creación de varios diseños predefinidos para el mapa del sorter, que pueden modificarse fácilmente según las necesidades operativas.
Definición del Mapa del sorter:
La operación puede vincular un PTL específico a una tienda, tipo de producto y tipo de embalaje, según su operación logística. Esto garantiza que los paquetes se envíen a los PTL correctos, alineando el flujo de recogida y envío con los requisitos de la operación.
NOTA: El bundler puede estar vinculado a más de un PTL simultáneamente. Si el objetivo ya está asociado a un PTL, WCS debe cadenciar los volúmenes, evitando sobrecargas en un único punto y dividiendo el orden de desviaciones entre los PTL vinculados al mismo objetivo.
Creación de Disposiciones Predefinidas:
El sistema permitirá la creación de mapas del sorter predefinidos por diseños. Cada diseño contendrá los PTLs específicos para diferentes tiendas, tipos de producto y tipos de envase, optimizando el proceso de desviación de volumen.
Facilidad para cambiar de maquetación:
La funcionalidad está diseñada para permitir un cambio rápido y sencillo entre diferentes maquetes, ofreciendo mayor flexibilidad operativa. De este modo, la disposición del mapa sorter puede cambiarse según la demanda de la operación, sin interrupciones significativas.
Libertad operativa: 
La capacidad de cambiar rápidamente la disposición del mapa sorter es esencial para que la operación tenga control total sobre el proceso de despacho. Esto es especialmente útil en escenarios de cambios de rutas o ajustes en la configuración operativa, como la redistribución de PTLs o cambios en la estrategia de separación.
Beneficios de las características:
Flexibilidad: Capacidad para adaptar rápidamente el flujo de trabajo según los cambios en el proceso logístico.
Seguridad: No todos los usuarios accederán a esta pantalla, solo los usuarios con permiso tendrán acceso a la pantalla del mapa sorter 
Eficiencia: Mejora de la eficiencia operativa, ya que los volúmenes se desviarán a los PTLs correctos, sin necesidad de intervenciones manuales.
Escalabilidad: La operación puede crear múltiples diseños y cambiar entre ellos según el volumen de operaciones o cambios en los requisitos logísticos.

---
**Origem:** [I25.115] 2026 — `I25.115 - ESPECIFICATION DE SOFTWARE - PROYECTO MARKET PERU.docx`  
**Heading:** Funcionalidad del mapa del sorter en WCS  
**Score:** — (nome-topico) | **ID:** d69363fe3fe1f4d9

El WCS tendrá una funcionalidad robusta que permitirá a la operación definir los PTLs vinculados a cada Tienda y Tipo de Producto, y también puede permitir la función de separar por Tipo de Empaque. Esta funcionalidad proporcionará flexibilidad en la operación, permitiendo la creación de varios diseños predefinidos para el mapa sorter, que pueden modificarse fácilmente según las necesidades operativas.
Definición del Mapa Sorter:
 La operación puede vincular un aPTL específico a una tienda, tipo de producto y tipo de embalaje, según su operación logística. Esto garantiza que los paquetes se envíen a los PTL correctos, alineando el flujo de recogida y envío con los requisitos de la operación.
NOTA: El agrupador puede estar vinculado a más de un PTL simultáneamente. Si el objetivo ya está asociado a un PTL, WCS debe cadenciar los volúmenes, evitando sobrecargas en un único punto y dividiendo el orden de desviaciones entre los PTL vinculados al mismo objetivo.
Creación de Disposiciones Predefinidas:
 El sistema permitirá la creación de mapas clasificadores predefinidos por diseños. Cada diseño contendrá los PTLs específicos para diferentes tiendas, tipos de producto y tipos de envase, optimizando el proceso de desviación de volumen.
Facilidad para cambiar de maquetación:
 La funcionalidad está diseñada para permitir un cambio rápido y sencillo entre diferentes maquetes, ofreciendo mayor flexibilidad operativa. De este modo, la disposición del mapa clasificador puede cambiarse según la demanda de la operación, sin interrupciones significativas.
Libertad operativa: 
La capacidad de cambiar rápidamente la disposición del mapa clasificador es esencial para que la operación tenga control total sobre el proceso de despacho. Esto es especialmente útil en escenarios de cambios de rutas o ajustes en la configuración operativa, como la redistribución de PTLs o cambios en la estrategia de separación.
Beneficios de las características:
Flexibilidad: Capacidad para adaptar rápidamente el flujo de trabajo según los cambios en el proceso logístico.
Eficiencia: Mejora de la eficiencia de la operación, ya que los volúmenes se desviarán a los PTL correctos, sin necesidad de intervenciones manuales.
Escalabilidad: La operación puede crear múltiples diseños y cambiar entre ellos según el volumen de operaciones o cambios en los requisitos logísticos.

---
**Origem:** [I25.115] 2026 — `I25.115 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO MARKET PERU.docx`  
**Heading:** Funcionalidade de Mapa de Sorter no WCS  
**Score:** — (nome-topico) | **ID:** b82bf44938839405

O WCS terá uma funcionalidade que permitirá à operação definir os PTLs vinculados a cada Loja e Tipo do Produto, podendo também habilitar a função de separar por Tipo de Embalagem. Essa funcionalidade proporcionará flexibilidade na operação, permitindo a criação de diversos layouts pré-definidos para o mapa de sorter, que poderão ser facilmente trocados conforme a necessidade operacional.
Definição do Mapa de Sorter:
A operação poderá vincular um PTL específico a uma Loja, Tipo do Produto e Tipo de Embalagem, de acordo com sua operação logística. Isso garante que os volumes sejam enviados para os PTLs corretos, alinhando o fluxo de separação e expedição aos requisitos da operação.
OBS: O agrupador pode ser vinculado a mais de um PTL simultaneamente. Caso o destino já esteja associado a um PTL, o WCS deverá cadenciar os volumes, evitando sobrecarga em um único ponto e dividindo a ordem de desvios entre os PTLs vinculados ao mesmo destino.
Criação de Layouts Pré-definidos:
O sistema permitirá a criação de layouts pré-definidos de mapas de sorter. Cada layout conterá os PTLs específicos para diferentes Lojas, Tipo de Produto e Tipos de Embalagem, otimizando o processo de desvio dos volumes.
Facilidade de Troca de Layouts:
A funcionalidade é projetada para permitir trocas rápidas e simples entre diferentes layouts, oferecendo maior flexibilidade operacional. Dessa forma, o layout do mapa de sorter poderá ser alterado conforme a demanda da operação, sem interrupções significativas.
Liberdade Operacional:
A capacidade de alterar rapidamente o layout do mapa de sorter é essencial para que a operação tenha controle total sobre o processo de expedição. Isso é especialmente útil em cenários de mudança de rotas ou ajustes na configuração operacional, como redistribuição de PTLs ou alterações na estratégia de separação.
Benefícios da Funcionalidade:
Flexibilidade: Capacidade de adaptar rapidamente o fluxo de trabalho conforme mudanças no processo logístico.
Segurança: Essa tela não será acessada por todos os usuários, apenas usuários com permissão terão acesso a tela de mapa de sorter 
Eficiência: Melhoria na eficiência da operação, já que os volumes serão desviados para os PTLs corretos, sem necessidade de intervenções manuais.
Escalabilidade: A operação pode criar múltiplos layouts e alternar entre eles conforme o volume de operações ou mudanças nos requisitos logísticos.

---
**Origem:** [I25.163] 2026 — `I25.163 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO MARKET CHILE.docx`  
**Heading:** Funcionalidade de Mapa de Sorter no WCS  
**Score:** — (nome-topico) | **ID:** c5402ed645c36dad

O WCS permite à operação definir os PTLs vinculados a cada Loja e Tipo de Produto, podendo também habilitar a separação por Tipo de Embalagem. A funcionalidade permite criar diversos layouts pré-definidos de mapa de sorter, trocados conforme a necessidade operacional.
Definição do mapa: a operação vincula um PTL específico a uma Loja, Tipo de Produto e Tipo de Embalagem, garantindo que os volumes sejam enviados aos PTLs corretos.
Cadenciamento entre PTLs: um agrupador pode ser vinculado a mais de um PTL simultaneamente. Quando o destino já está associado a um PTL, o WCS cadência os volumes entre os PTLs vinculados ao mesmo destino, evitando sobrecarga em um único ponto.
Flexibilidade: adaptação rápida do fluxo conforme mudanças logísticas.
Segurança: tela acessível apenas a usuários com permissão.
Eficiência: desvio automático para os PTLs corretos, sem intervenção manual.
Escalabilidade: múltiplos layouts alternáveis conforme o volume ou requisitos.
A Invent orienta que a troca de mapa de sorter seja feita com a operação parada, para garantir a viabilidade dos desvios.

---
**Origem:** [I26.] 2026 — `I26.xxxx - Especificação de Software - Mustard.docx`  
**Heading:** Mapa de Sorter  
**Score:** — (nome-topico) | **ID:** 073a1f4b13fc7d0b

O sistema disponibilizará a funcionalidade Sorter Map, permitindo a gestão flexível das docas virtuais.
O supervisor operacional poderá vincular dinamicamente uma Rota ou Cliente a uma Posição Física (QR Code).
Exemplo: "Hoje a Posição 01 vai montar a Rota Zona Sul; A Posição 02 vai montar a Rota Centro".

---
**Origem:** [I26.] 2026 — `I26.xxxx - Especificação de Software - Wild Fork.docx`  
**Heading:** Sorter Map  
**Score:** — (nome-topico) | **ID:** 08eef8d95df870bc

The system will provide the Sorter Map functionality, allowing the flexible management of virtual positions.
The operational supervisor will be able to dynamically link a Route or Client to a Physical Position (QR Code).
Example: "Today Position 01 will assemble the South Zone Route; Position 02 will assemble the Center Route".

---
**Origem:** [I23.144] ADITIVO — `I23.144 - Aditivo Automatize - Sorter Aloca Pallet e Dashboard.docx`  
**Heading:** Mapa de Sorter  
**Score:** — (nome-topico) | **ID:** 569f52859e75a9f7

O WCS disponibilizará uma funcionalidade de Mapa de Sorter que permitirá à operação definir as rampas vinculadas a cada Loja. Essa funcionalidade proporcionará flexibilidade na operação, permitindo a criação de layouts pré-definidos para o mapa de sorter, que poderão ser facilmente alternados conforme a necessidade operacional.
O sorter deste projeto conta com 4 rampas de saída para o transporte dos volumes. A definição do mapa determinará em qual rampa cada loja terá seus volumes desviados durante o processo de sorteamento.

---
**Origem:** [I23.144] ADITIVO — `I23.144 - Aditivo Automatize - Sorter Aloca Pallet e Dashboard.docx`  
**Heading:** Agrupamento por Loja  
**Score:** — (semantico) | **ID:** f7a0a6cedf3a263a

Neste projeto o agrupador principal do Mapa de Sorter será a Loja. Cada loja de destino será vinculada a uma rampa específica no sorter, garantindo que todos os volumes destinados àquela loja sejam direcionados para a rampa correta.
Essa abordagem garante que o fluxo de separação e expedição esteja alinhado à lógica operacional de distribuição por loja, refletindo com precisão a divisão logística estabelecida.

---
**Origem:** [I23.144] ADITIVO — `I23.144 - Aditivo Automatize - Sorter Aloca Pallet e Dashboard.docx`  
**Heading:** Regras Operacionais  
**Score:** — (semantico) | **ID:** 8beffdd3136e55f2

O WCS deve utilizar a Loja (destino) como agrupador logístico principal no Mapa de Sorter.
Cada loja poderá ser vinculada a uma única rampa de saída do sorter, porém uma mesma rampa poderá atender múltiplas lojas simultaneamente.
A operação poderá criar, editar e alternar entre diferentes layouts de mapa de sorter conforme a necessidade operacional.
Caso uma loja não esteja alocada a nenhuma rampa, o WCS deverá sinalizar a pendência na tela de Mapa de Sorter, impedindo o desvio automático até a configuração ser realizada.
será possível alterar o mapa de sorter para lojas cujos volumes já tenham sido induzidos no sorter, o sistema deverá considerar a nova rampa quando o próximo volume vier.

---
**Origem:** [I25.9043] ADITIVO — `I25.9043 - Aditivo Projeto Beleza Fase2 - Controle Lote e Validade.docx`  
**Heading:** Regras de Funcionamento  
**Score:** — (semantico) | **ID:** b0766348759912ca

O funcionamento da configuração seguirá as seguintes regras:
A regra será baseada exclusivamente no campo div enviado na integração de produto.
Caso o div do produto esteja cadastrado na lista de exceções:
O sistema não solicitará leitura de lote.
O sistema não solicitará leitura de validade.
Será disponibilizada uma nova configuração no sistema onde o operador poderá gerenciar as divisões que fazem parte da regra de exceção.
Nesta configuração será possível:
Adicionar divisões
Editar divisões já cadastrados
Remover divisões da lista
Limpar todos os registros cadastrados
Não haverá limite para a quantidade de divisões que poderão ser cadastrados na regra.
Impacto na Integração de Produtos
A regra utilizará o campo div já existente na integração de produtos enviada pelo WMS ao WCS, conforme exemplo abaixo.
Quando o sistema identificar que o valor enviado neste campo corresponde a um departamento cadastrado na configuração de exceção, o processo de leitura de lote e validade será automaticamente desativado para o produto.

---
**Origem:** [I24.203] ADITIVO — `I24.203 - Aditivo Projeto Beta - Unificação de Order Start.docx`  
**Heading:** Escopo da melhoria  
**Score:** — (semantico) | **ID:** 06a0473b21755d26

Estão contempladas neste aditivo duas alterações, descritas abaixo. As demais regras (Fullcase 01 a 06 e Order Start Fracionado) permanecem inalteradas.

---
**Origem:** [I25.3515] ADITIVO — `I25.3515 - Aditivo Dashboard Relatorios e Cadenciamento - Projeto Esperança.docx`  
**Heading:** Exemplo Prático de Intercalação  
**Score:** — (semantico) | **ID:** cf4ce0182d63acca

Considere uma rua com missões integradas cujos volumes são destinados a 4 rampas distintas:
Comportamento ATUAL (sem intercalação): o WCS imprimiria as 20 etiquetas da Rampa 1, depois as 4 da Rampa 2, depois as 10 da Rampa 3 e por fim as 6 da Rampa 4. Resultado: 20 volumes consecutivos chegam à mesma rampa.
Comportamento NOVO (com intercalação): o WCS alterna entre as rampas no mesmo endereço, imprimindo 1 etiqueta por rampa a cada rodada:
A Rampa 2 (4 volumes) é a primeira a sair do ciclo após a 4ª rodada. Na sequência, a Rampa 4 (6 volumes) sai após a 6ª rodada. A Rampa 3 (10 volumes) sai após a 10ª rodada. Os volumes restantes da Rampa 1 são impressos sequencialmente até o fim, pois é a única rampa com pendentes.

---
**Origem:** [I25.3515] ADITIVO — `I25.3515 - Aditivo Dashboard Relatorios e Cadenciamento - Projeto Esperança.docx`  
**Heading:** Objetivo do Controle  
**Score:** — (semantico) | **ID:** b8eea1575c14c75a

Essa alteração no processo de Order Start garante:
Distribuição balanceada de volumes entre as rampas do sorter
Eliminação de gargalos por acúmulo de volumes em uma única rampa
Melhor aproveitamento simultâneo de todas as rampas de expedição
Compatibilidade com a Matriz de Fragilidade e regras de Order Start já vigentes
Manutenção da rota linear de coleta – o operador não retorna a endereços já percorridos
Maior fluidez operacional e produtividade na expedição

---
**Origem:** [I25.3515] ADITIVO — `I25.3515 - Dashboard Matriz Por Rampa  e Cadenciamento de seleção no order start - PROJETO ESPERANCA .docx`  
**Heading:** Exemplo Prático de Intercalação  
**Score:** — (semantico) | **ID:** 29700fcde0a51507

Considere o seguinte cenário de missões integradas para uma mesma rua, com o mapa de sorter ativo direcionando os volumes para 4 rampas distintas:
O WCS gerará a fila de impressão da seguinte forma:
Observe que a Rampa 2 (4 volumes) é a primeira a ser removida do ciclo após a 4ª rodada. Na sequência, a Rampa 4 (6 volumes) sai após a 6ª rodada. A Rampa 3 (10 volumes) sai após a 10ª rodada. Por fim, os volumes restantes da Rampa 1 (20 volumes) são impressos sequencialmente até o fim.

---
**Origem:** [I24.101] ADITIVO — `I24.101 - PROJ TOYS - ESPECIFICACAO DE SOFTWARE - ADITIVOS - Rev 5.docx`  
**Heading:** Mapa de Sorter – Alteração de Regra  
**Score:** — (nome-topico) | **ID:** 27b3d2d75cb16468

O WCS deverá permitir a alteração do mapa de sorter mesmo com pedidos já integrados e iniciados nos Order Start.
A alteração somente será permitida quando não houver pallets com itens alocados.
Caso existam pallets com itens alocados no sorter, será necessário realizar o fechamento forçado desses pallets antes da troca do mapa.
Regras Operacionais
Permitir troca de mapa com pedidos iniciados, desde que não existam pallets ativos com itens.
Se houver pallets com itens alocados:
Exibir mensagem informativa ao operador.
Bloquear a alteração até que seja realizado o fechamento dos pallets.
Após o fechamento dos pallets, a alteração do mapa deve ser liberada.

---
**Origem:** [I21.] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.1-Fase 1.docx`  
**Heading:** Mapa de rota  
**Score:** — (nome-topico) | **ID:** 83c8bb8f0b61289c

Os mapas de rota são tabelas que relacionam as rotas dos volumes às rampas de saída do Sorter. Por exemplo, é possível relacionar a rota “RIO” para a saída 7 do Sorter, assim todos os volumes da rota “RIO” serão desviados para a rampa 07 do equipamento. As funcionalidades de incluir, editar e excluir mapas de rota se encontra disponibilizada na tela mapas de rota (Figura 10), onde os mapas são mostrados por uma tabela com os seguintes dados:

---
**Origem:** [I21.] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.1-Fase 1.docx`  
**Heading:** Criar /editar/remover/ativar mapa de rotas  
**Score:** — (semantico) | **ID:** ca81caddd3485e36

Ao selecionar um mapa de rotas, é possível utilizar os botões do menu superior para criar, editar, remover e ativar um mapa. Para criar ou editar um mapa, o botão Incluir ou Editar deve ser pressionado onde a tela, ilustrada pela Figura 11, se encontra dividida em três partes:
• Superior esquerda: mostra as rampas do Sorter. As rampas podem ser adicionadas ou removidas do mapa de acordo com a necessidade do usuário;
• Inferior esquerda: quando uma rampa for selecionada na seção de rampas, esta divisão mostrará todas as rotas cadastras na mesma. Além disso, é possível adicionar, editar ou remover o cadastro de uma rota na rampa selecionada;
• Direita: painel que mostra todas as rampas e rotas do sistema. As linhas em vermelho mostram as rotas ou rampas que estão com cadastros vazios e se encontram sempre no topo do painel, enquanto as linhas em verde mostram as relações estabelecidas entre rotas e rampas.
Por último, o botão Excluir pode ser utilizado para remover um mapa do cadastro e o botão Ativar Mapa pode ser utilizado para escolher qual mapa deverá ser executado pelo Sorter. Vale notar que somente um mapa pode estar ativo por vez.

---
**Origem:** [I21.] 2022 — `- Layout Novo - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RS - Rev.3.docx`  
**Heading:** Mapa de rota  
**Score:** — (nome-topico) | **ID:** e81ded2d121e8080

Os mapas de rota são tabelas que relacionam as rotas dos volumes às rampas de saída do Sorter. Por exemplo, é possível relacionar a rota “RIO” para a saída 7 do Sorter, assim todos os volumes da rota “RIO” serão desviados para a rampa 07 do equipamento. As funcionalidades de incluir, editar e excluir mapas de rota se encontra disponibilizada na tela mapas de rota (Figura 10), onde os mapas são mostrados por uma tabela com os seguintes dados:

---
**Origem:** [I21.] 2022 — `- Layout Novo - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RS - Rev.3.docx`  
**Heading:** Criar /editar/remover/ativar mapa de rotas  
**Score:** — (semantico) | **ID:** 5a29f0e22b594eef

Ao selecionar um mapa de rotas, é possível utilizar os botões do menu superior para criar, editar, remover e ativar um mapa. Para criar ou editar um mapa, o botão Incluir ou Editar deve ser pressionado onde a tela, ilustrada pela Figura 11, se encontra dividida em três partes:
• Superior esquerda: mostra as rampas do Sorter. As rampas podem ser adicionadas ou removidas do mapa de acordo com a necessidade do usuário;
• Inferior esquerda: quando uma rampa for selecionada na seção de rampas, esta divisão mostrará todas as rotas cadastras na mesma. Além disso, é possível adicionar, editar ou remover o cadastro de uma rota na rampa selecionada;
• Direita: painel que mostra todas as rampas e rotas do sistema. As linhas em vermelho mostram as rotas ou rampas que estão com cadastros vazios e se encontram sempre no topo do painel, enquanto as linhas em verde mostram as relações estabelecidas entre rotas e rampas.
Por último, o botão Excluir pode ser utilizado para remover um mapa do cadastro e o botão Ativar Mapa pode ser utilizado para escolher qual mapa deverá ser executado pelo Sorter. Vale notar que somente um mapa pode estar ativo por vez.

---
**Origem:** [I21.] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RS - Rev.3.docx`  
**Heading:** Mapa de rota  
**Score:** — (nome-topico) | **ID:** 50f4de947f904f25

Os mapas de rota são tabelas que relacionam as rotas dos volumes às rampas de saída do Sorter. Por exemplo, é possível relacionar a rota “RIO” para a saída 7 do Sorter, assim todos os volumes da rota “RIO” serão desviados para a rampa 07 do equipamento. As funcionalidades de incluir, editar e excluir mapas de rota se encontra disponibilizada na tela mapas de rota (Figura 10), onde os mapas são mostrados por uma tabela com os seguintes dados:

---
**Origem:** [I21.] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RS - Rev.3.docx`  
**Heading:** Criar /editar/remover/ativar mapa de rotas  
**Score:** — (semantico) | **ID:** de7c53dc6ea54762

Ao selecionar um mapa de rotas, é possível utilizar os botões do menu superior para criar, editar, remover e ativar um mapa. Para criar ou editar um mapa, o botão Incluir ou Editar deve ser pressionado onde a tela, ilustrada pela Figura 11, se encontra dividida em três partes:
• Superior esquerda: mostra as rampas do Sorter. As rampas podem ser adicionadas ou removidas do mapa de acordo com a necessidade do usuário;
• Inferior esquerda: quando uma rampa for selecionada na seção de rampas, esta divisão mostrará todas as rotas cadastras na mesma. Além disso, é possível adicionar, editar ou remover o cadastro de uma rota na rampa selecionada;
• Direita: painel que mostra todas as rampas e rotas do sistema. As linhas em vermelho mostram as rotas ou rampas que estão com cadastros vazios e se encontram sempre no topo do painel, enquanto as linhas em verde mostram as relações estabelecidas entre rotas e rampas.
Por último, o botão Excluir pode ser utilizado para remover um mapa do cadastro e o botão Ativar Mapa pode ser utilizado para escolher qual mapa deverá ser executado pelo Sorter. Vale notar que somente um mapa pode estar ativo por vez.

---
**Origem:** [I21.177] 2022 — `- Layout Novo - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.5.docx`  
**Heading:** Mapa de rota  
**Score:** — (nome-topico) | **ID:** 65ac5687184e88f1

Os mapas de rota são tabelas que relacionam as rotas dos volumes às rampas de saída do Sorter. Por exemplo, é possível relacionar a rota “RIO” para a saída 7 do Sorter, assim todos os volumes da rota “RIO” serão desviados para a rampa 07 do equipamento. As funcionalidades de incluir, editar e excluir mapas de rota se encontra disponibilizada na tela mapas de rota (Figura 10), onde os mapas são mostrados por uma tabela com os seguintes dados:

---
**Origem:** [I21.177] 2022 — `- Layout Novo - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.5.docx`  
**Heading:** Criar /editar/remover/ativar mapa de rotas  
**Score:** — (semantico) | **ID:** 8b36e5d6809785a7

Ao selecionar um mapa de rotas, é possível utilizar os botões do menu superior para criar, editar, remover e ativar um mapa. Para criar ou editar um mapa, o botão Incluir ou Editar deve ser pressionado onde a tela, ilustrada pela Figura 11, se encontra dividida em três partes:
• Superior esquerda: mostra as rampas do Sorter. As rampas podem ser adicionadas ou removidas do mapa de acordo com a necessidade do usuário;
• Inferior esquerda: quando uma rampa for selecionada na seção de rampas, esta divisão mostrará todas as rotas cadastras na mesma. Além disso, é possível adicionar, editar ou remover o cadastro de uma rota na rampa selecionada;
• Direita: painel que mostra todas as rampas e rotas do sistema. As linhas em vermelho mostram as rotas ou rampas que estão com cadastros vazios e se encontram sempre no topo do painel, enquanto as linhas em verde mostram as relações estabelecidas entre rotas e rampas.
Por último, o botão Excluir pode ser utilizado para remover um mapa do cadastro e o botão Ativar Mapa pode ser utilizado para escolher qual mapa deverá ser executado pelo Sorter. Vale notar que somente um mapa pode estar ativo por vez.

---
**Origem:** [I21.177] 2022 — `NOVO LAYOUT - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.5.docx`  
**Heading:** Mapa de rota  
**Score:** — (nome-topico) | **ID:** 0fc97feaf5889aad

Os mapas de rota são tabelas que relacionam as rotas dos volumes às rampas de saída do Sorter. Por exemplo, é possível relacionar a rota “RIO” para a saída 7 do Sorter, assim todos os volumes da rota “RIO” serão desviados para a rampa 07 do equipamento. As funcionalidades de incluir, editar e excluir mapas de rota se encontra disponibilizada na tela mapas de rota (Figura 10), onde os mapas são mostrados por uma tabela com os seguintes dados:

---
**Origem:** [I21.177] 2022 — `NOVO LAYOUT - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.5.docx`  
**Heading:** Criar /editar/remover/ativar mapa de rotas  
**Score:** — (semantico) | **ID:** 8ef2de4f076d75dd

Ao selecionar um mapa de rotas, é possível utilizar os botões do menu superior para criar, editar, remover e ativar um mapa. Para criar ou editar um mapa, o botão Incluir ou Editar deve ser pressionado onde a tela, ilustrada pela Figura 11, se encontra dividida em três partes:
• Superior esquerda: mostra as rampas do Sorter. As rampas podem ser adicionadas ou removidas do mapa de acordo com a necessidade do usuário;
• Inferior esquerda: quando uma rampa for selecionada na seção de rampas, esta divisão mostrará todas as rotas cadastras na mesma. Além disso, é possível adicionar, editar ou remover o cadastro de uma rota na rampa selecionada;
• Direita: painel que mostra todas as rampas e rotas do sistema. As linhas em vermelho mostram as rotas ou rampas que estão com cadastros vazios e se encontram sempre no topo do painel, enquanto as linhas em verde mostram as relações estabelecidas entre rotas e rampas.
Por último, o botão Excluir pode ser utilizado para remover um mapa do cadastro e o botão Ativar Mapa pode ser utilizado para escolher qual mapa deverá ser executado pelo Sorter. Vale notar que somente um mapa pode estar ativo por vez.

---
**Origem:** [I21.177] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.8.docx`  
**Heading:** Mapa de rota  
**Score:** — (nome-topico) | **ID:** 213a9f58c18f869c

Os mapas de rota são tabelas que relacionam as rotas dos volumes às rampas de saída do Sorter. Por exemplo, é possível relacionar a rota “RIO” para a saída 7 do Sorter, assim todos os volumes da rota “RIO” serão desviados para a rampa 07 do equipamento. As funcionalidades de incluir, editar e excluir mapas de rota se encontra disponibilizada na tela mapas de rota (Figura 10), onde os mapas são mostrados por uma tabela com os seguintes dados:

---
**Origem:** [I21.177] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.8.docx`  
**Heading:** Criar /editar/remover/ativar mapa de rotas  
**Score:** — (semantico) | **ID:** 8653b8d99585fd30

Ao selecionar um mapa de rotas, é possível utilizar os botões do menu superior para criar, editar, remover e ativar um mapa. Para criar ou editar um mapa, o botão Incluir ou Editar deve ser pressionado onde a tela, ilustrada pela Figura 11, se encontra dividida em três partes:
• Superior esquerda: mostra as rampas do Sorter. As rampas podem ser adicionadas ou removidas do mapa de acordo com a necessidade do usuário;
• Inferior esquerda: quando uma rampa for selecionada na seção de rampas, esta divisão mostrará todas as rotas cadastras na mesma. Além disso, é possível adicionar, editar ou remover o cadastro de uma rota na rampa selecionada;
• Direita: painel que mostra todas as rampas e rotas do sistema. As linhas em vermelho mostram as rotas ou rampas que estão com cadastros vazios e se encontram sempre no topo do painel, enquanto as linhas em verde mostram as relações estabelecidas entre rotas e rampas.
Por último, o botão Excluir pode ser utilizado para remover um mapa do cadastro e o botão Ativar Mapa pode ser utilizado para escolher qual mapa deverá ser executado pelo Sorter. Vale notar que somente um mapa pode estar ativo por vez.

---
**Origem:** [I21.177] 2022 — `- Layout Novo - I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - SP Rev.5.docx`  
**Heading:** Mapa de rota  
**Score:** — (nome-topico) | **ID:** 53deb8820c474d5a

Os mapas de rota são tabelas que relacionam as rotas dos volumes às rampas de saída do Sorter. Por exemplo, é possível relacionar a rota “RIO” para a saída 7 do Sorter, assim todos os volumes da rota “RIO” serão desviados para a rampa 07 do equipamento. As funcionalidades de incluir, editar e excluir mapas de rota se encontra disponibilizada na tela mapas de rota, onde os mapas são mostrados por uma tabela com os seguintes dados:

---
**Origem:** [I21.177] 2022 — `- Layout Novo - I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - SP Rev.5.docx`  
**Heading:** Criar /editar/remover/ativar mapa de rotas  
**Score:** — (semantico) | **ID:** ff2540126ff03b9d

Ao selecionar um mapa de rotas, é possível utilizar os botões do menu superior para criar, editar, remover e ativar um mapa. Para criar ou editar um mapa, o botão Incluir ou Editar deve ser pressionado onde a tela, ilustrada pela Figura 11, se encontra dividida em três partes:
• Superior esquerda: mostra as rampas do Sorter. As rampas podem ser adicionadas ou removidas do mapa de acordo com a necessidade do usuário;
• Inferior esquerda: quando uma rampa for selecionada na seção de rampas, esta divisão mostrará todas as rotas cadastras na mesma. Além disso, é possível adicionar, editar ou remover o cadastro de uma rota na rampa selecionada;
• Direita: painel que mostra todas as rampas e rotas do sistema. As linhas em vermelho mostram as rotas ou rampas que estão com cadastros vazios e se encontram sempre no topo do painel, enquanto as linhas em verde mostram as relações estabelecidas entre rotas e rampas.
Por último, o botão Excluir pode ser utilizado para remover um mapa do cadastro e o botão Ativar Mapa pode ser utilizado para escolher qual mapa deverá ser executado pelo Sorter. Vale notar que somente um mapa pode estar ativo por vez.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - FASE.1 VER.1.docx`  
**Heading:** Mapa de rota  
**Score:** — (nome-topico) | **ID:** 07bbfd4a1b64d466

Os mapas de rota são tabelas que relacionam as rotas dos volumes às rampas de saída do Sorter. Por exemplo, é possível relacionar a rota “RIO” para a saída 7 do Sorter, assim todos os volumes da rota “RIO” serão desviados para a rampa 07 do equipamento. As funcionalidades de incluir, editar e excluir mapas de rota se encontra disponibilizada na tela mapas de rota (Figura 10), onde os mapas são mostrados por uma tabela com os seguintes dados:

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - FASE.1 VER.1.docx`  
**Heading:** Criar /editar/remover/ativar mapa de rotas  
**Score:** — (semantico) | **ID:** 0189708317dff7e7

Ao selecionar um mapa de rotas, é possível utilizar os botões do menu superior para criar, editar, remover e ativar um mapa. Para criar ou editar um mapa, o botão Incluir ou Editar deve ser pressionado onde a tela, ilustrada pela Figura 11, se encontra dividida em três partes:
• Superior esquerda: mostra as rampas do Sorter. As rampas podem ser adicionadas ou removidas do mapa de acordo com a necessidade do usuário;
• Inferior esquerda: quando uma rampa for selecionada na seção de rampas, esta divisão mostrará todas as rotas cadastras na mesma. Além disso, é possível adicionar, editar ou remover o cadastro de uma rota na rampa selecionada;
• Direita: painel que mostra todas as rampas e rotas do sistema. As linhas em vermelho mostram as rotas ou rampas que estão com cadastros vazios e se encontram sempre no topo do painel, enquanto as linhas em verde mostram as relações estabelecidas entre rotas e rampas.
Por último, o botão Excluir pode ser utilizado para remover um mapa do cadastro e o botão Ativar Mapa pode ser utilizado para escolher qual mapa deverá ser executado pelo Sorter. Vale notar que somente um mapa pode estar ativo por vez.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - FASE1 - CUBOMETRO.docx`  
**Heading:** Mapa de rota  
**Score:** — (nome-topico) | **ID:** 5a09716b60f946b8

Os mapas de rota são tabelas que relacionam as rotas dos volumes às rampas de saída do Sorter. Por exemplo, é possível relacionar a rota “RIO” para a saída 7 do Sorter, assim todos os volumes da rota “RIO” serão desviados para a rampa 07 do equipamento. As funcionalidades de incluir, editar e excluir mapas de rota se encontra disponibilizada na tela mapas de rota, onde os mapas são mostrados por uma tabela com os seguintes dados:

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - FASE1 - CUBOMETRO.docx`  
**Heading:** Criar /editar/remover/ativar mapa de rotas  
**Score:** — (semantico) | **ID:** 9fa8a4fd2e310b65

Ao selecionar um mapa de rotas, é possível utilizar os botões do menu superior para criar, editar, remover e ativar um mapa. Para criar ou editar um mapa, o botão Incluir ou Editar deve ser pressionado onde a tela, ilustrada pela Figura 11, se encontra dividida em três partes:
• Superior esquerda: mostra as rampas do Sorter. As rampas podem ser adicionadas ou removidas do mapa de acordo com a necessidade do usuário;
• Inferior esquerda: quando uma rampa for selecionada na seção de rampas, esta divisão mostrará todas as rotas cadastras na mesma. Além disso, é possível adicionar, editar ou remover o cadastro de uma rota na rampa selecionada;
• Direita: painel que mostra todas as rampas e rotas do sistema. As linhas em vermelho mostram as rotas ou rampas que estão com cadastros vazios e se encontram sempre no topo do painel, enquanto as linhas em verde mostram as relações estabelecidas entre rotas e rampas.
Por último, o botão Excluir pode ser utilizado para remover um mapa do cadastro e o botão Ativar Mapa pode ser utilizado para escolher qual mapa deverá ser executado pelo Sorter. Vale notar que somente um mapa pode estar ativo por vez.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev.1 - Fase 1.docx`  
**Heading:** Mapa de rota  
**Score:** — (nome-topico) | **ID:** 740e330a2fe0d4e8

Os mapas de rota são tabelas que relacionam as rotas dos volumes às rampas de saída do Sorter. Por exemplo, é possível relacionar a rota “RIO” para a saída 7 do Sorter, assim todos os volumes da rota “RIO” serão desviados para a rampa 07 do equipamento. As funcionalidades de incluir, editar e excluir mapas de rota se encontra disponibilizada na tela mapas de rota, onde os mapas são mostrados por uma tabela com os seguintes dados:

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev.1 - Fase 1.docx`  
**Heading:** Criar /editar/remover/ativar mapa de rotas  
**Score:** — (semantico) | **ID:** e199565993693151

Ao selecionar um mapa de rotas, é possível utilizar os botões do menu superior para criar, editar, remover e ativar um mapa. Para criar ou editar um mapa, o botão Incluir ou Editar deve ser pressionado onde a tela, ilustrada pela Figura 11, se encontra dividida em três partes:
• Superior esquerda: mostra as rampas do Sorter. As rampas podem ser adicionadas ou removidas do mapa de acordo com a necessidade do usuário;
• Inferior esquerda: quando uma rampa for selecionada na seção de rampas, esta divisão mostrará todas as rotas cadastras na mesma. Além disso, é possível adicionar, editar ou remover o cadastro de uma rota na rampa selecionada;
• Direita: painel que mostra todas as rampas e rotas do sistema. As linhas em vermelho mostram as rotas ou rampas que estão com cadastros vazios e se encontram sempre no topo do painel, enquanto as linhas em verde mostram as relações estabelecidas entre rotas e rampas.
Por último, o botão Excluir pode ser utilizado para remover um mapa do cadastro e o botão Ativar Mapa pode ser utilizado para escolher qual mapa deverá ser executado pelo Sorter. Vale notar que somente um mapa pode estar ativo por vez.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev.5.docx`  
**Heading:** Mapa de rota  
**Score:** — (nome-topico) | **ID:** 2758112498bcb6fe

Os mapas de rota são tabelas que relacionam as rotas dos volumes às rampas de saída do Sorter. Por exemplo, é possível relacionar a rota “RIO” para a saída 7 do Sorter, assim todos os volumes da rota “RIO” serão desviados para a rampa 07 do equipamento. As funcionalidades de incluir, editar e excluir mapas de rota se encontra disponibilizada na tela mapas de rota, onde os mapas são mostrados por uma tabela com os seguintes dados:

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev.5.docx`  
**Heading:** Criar /editar/remover/ativar mapa de rotas  
**Score:** — (semantico) | **ID:** 6a3c05a4807636aa

Ao selecionar um mapa de rotas, é possível utilizar os botões do menu superior para criar, editar, remover e ativar um mapa. Para criar ou editar um mapa, o botão Incluir ou Editar deve ser pressionado onde a tela, ilustrada pela Figura 11, se encontra dividida em três partes:
• Superior esquerda: mostra as rampas do Sorter. As rampas podem ser adicionadas ou removidas do mapa de acordo com a necessidade do usuário;
• Inferior esquerda: quando uma rampa for selecionada na seção de rampas, esta divisão mostrará todas as rotas cadastras na mesma. Além disso, é possível adicionar, editar ou remover o cadastro de uma rota na rampa selecionada;
• Direita: painel que mostra todas as rampas e rotas do sistema. As linhas em vermelho mostram as rotas ou rampas que estão com cadastros vazios e se encontram sempre no topo do painel, enquanto as linhas em verde mostram as relações estabelecidas entre rotas e rampas.
Por último, o botão Excluir pode ser utilizado para remover um mapa do cadastro e o botão Ativar Mapa pode ser utilizado para escolher qual mapa deverá ser executado pelo Sorter. Vale notar que somente um mapa pode estar ativo por vez.

---
**Origem:** [I22.144] 2022 — `I22.144 - PROJETO GIGA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.2.docx`  
**Heading:** Mapa de rota  
**Score:** — (nome-topico) | **ID:** 6c5413f1bc69e356

Os mapas de rota são tabelas que relacionam as rotas dos volumes às rampas de saída do Sorter. Por exemplo, é possível relacionar a rota “RIO” para a saída 7 do Sorter, assim todos os volumes da rota “RIO” serão desviados para a rampa 07 do equipamento

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** RF22 – Gestão de ordens de transportes  
**Score:** — (semantico) | **ID:** bd056917f5338dd1

No WCS Velox deve ser possivel visualizar as ordens de saída canceladas pelo PLC (que não puderam ser atendidas) que existem no sistema.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Ordens de transporte canceladas  
**Score:** — (semantico) | **ID:** 50a0ac4986cae67e

Diante da impossibilidade de executar uma ordem de transporte pelo PLC, o sistema gera uma estrutura (Cancela, Pallet, OT) e dispõe essas informações na tela ilustrada na imagem abaixo.
WCS Velox deve possibilitar filtrar as ordens pelo PLC responsável, através do filtro “Transelevador”.
A opção “Cancelar” permite que o sistema mande, efetivamente, a mensagem de cancelamento para o SAP, enquanto a opção “Reprocessar” permite ao PLC emitir novamente a missão de retirada.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** RF22 – Gestão de ordens de transportes  
**Score:** — (semantico) | **ID:** 3f30b0f8fa9add39

No WCS Velox deve ser possivel visualizar as ordens de saída canceladas pelo PLC (que não puderam ser atendidas) que existem no sistema.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Ordens de transporte canceladas  
**Score:** — (semantico) | **ID:** 2eccda9542435e24

Diante da impossibilidade de executar uma ordem de transporte pelo PLC, o sistema gera uma estrutura (Cancela, Pallet, OT) e dispõe essas informações na tela ilustrada na imagem abaixo.
WCS Velox deve possibilitar filtrar as ordens pelo PLC responsável, através do filtro “Transelevador”.
A opção “Cancelar” permite que o sistema mande, efetivamente, a mensagem de cancelamento para o SAP, enquanto a opção “Reprocessar” permite ao PLC emitir novamente a missão de retirada.

---
**Origem:** [I22.1732] 2023 — `- ESPECIFICACAO DE SOFTWARE - PROJETO FLOWER .docx`  
**Heading:** Mapa de Sorter  
**Score:** — (nome-topico) | **ID:** 399020b0c2e2c7cf

O WCS terá uma funcionalidade robusta que permitirá a operação definir as rampas vinculadas a cada Transportadora. Essa funcionalidade proporcionará flexibilidade na operação, permitindo a criação de diversos layouts pré-definidos para o mapa de sorter, que poderão ser facilmente trocados conforme a necessidade operacional.
Definição do Mapa de Sorter: A operação poderá vincular uma rampa específica a uma transportadora de acordo com sua operação logística. Isso garante que os volumes sejam enviados para as rampas corretas, alinhando o fluxo de separação e expedição aos requisitos da operação

---
**Origem:** [I23.1409] 2023 — `I23.1409 - PROJETO CANCUN - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_5.docx`  
**Heading:** Mapa Sorter  
**Score:** — (nome-topico) | **ID:** ad45d4bc3642bf1d

O sistema Velox, dispõe a configuração dos mapas operacionais do sorter, o mapa do sorter será necessário para que os operadores do sistema editem sua operação conforme sua necessidade, adicionando e editando os mapas criados.
Nos mapas, o operador realiza a configuração das rampas com as transportadoras, realizando o vínculo entre elas conforme a sua operação.
Por exemplo: No mapa o operador configurou a rampa 2 vinculada com a transportadora "Anjum", sendo assim, quando esse mapa estiver ativo no sistema Velox, todos os volumes que forem lidos no sorter e forem da transportadora "Anjum", será desviado na rampa 2 conforme configuração do mapa.
Obs.: O sistema Velox necessita de um mapa ativo no sistema, caso não tenha nenhum mapa ativo no sistema Velox, todos os volumes induzidos na esteira seguirão para o rejeito.
O volume ao ser desviado e ao acionar o sensor da rampa de desvio, o Velox envia a integração de "Boxexit" para o WMS com a informação do volume e rampa confirmando o seu correto desvio.

---
**Origem:** [I23.1733] 2023 — `I23.1733  -  PROJETO FOX - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev 8.docx`  
**Heading:** Rampas  
**Score:** — (nome-topico) | **ID:** 8e38eadf9874f7ff

Os sinaleiros são dispositivos que indicam o status das rampas do sorter. Devem ser posicionados em uma área de facil visualização para o operador, auxiliando-os na identificação e controle do fluxo de produtos no processo do sorter.
Rampa Cheia
- Verde piscante
Rampa Disponivel
- Verde aceso
Atualização
- Verde piscante
Sistema sem rede
- Verde piscante

---
**Origem:** [I23.3503] 2023 — `I23.3503- ESPECIFICACAO DE SOFTWARE - PROJETO Eletro REV .1 - Gu.docx`  
**Heading:** Funcionalidade de Mapa de Sorter no WCS  
**Score:** — (nome-topico) | **ID:** 876848dc59f4dfef

O WCS terá uma funcionalidade robusta que permitirá ao cliente definir as rampas vinculadas a cada transportadora e rota. Essa funcionalidade proporcionará flexibilidade na operação, permitindo a criação de diversos layouts pré-definidos para o mapa de sorter, que poderão ser facilmente trocados conforme as necessidades operacionais do cliente.
Definição do Mapa de Sorter: O cliente poderá vincular uma rampa específica a cada rota e transportadora de acordo com sua operação logística. Isso garante que os volumes sejam enviados para as rampas corretas, alinhando o fluxo de separação e expedição aos requisitos do cliente.
OBS: O agrupador não pode ser vinculado a mais de uma rampa. Caso já esteja associado a uma rampa, será automaticamente desvinculado para permitir o novo vínculo, sem necessidade de intervenção manual.
Criação de Layouts Pré-definidos: O sistema permitirá a criação de layouts pré-definidos de mapas de sorter. Cada layout conterá as rampas específicas para diferentes transportadoras ou rotas, otimizando o processo de desvio dos volumes.
Facilidade de Troca de Layouts: A funcionalidade é projetada para trocas rápidas e simples entre diferentes layouts. Isso oferece ao cliente liberdade operacional, permitindo que o layout do mapa de sorter seja alterado conforme a demanda da operação, sem interrupções significativas.
Liberdade Operacional: A capacidade de alterar rapidamente o layout do mapa de sorter é essencial para que o cliente tenha controle total sobre o processo de expedição. Isso é especialmente útil em cenários de mudança de rotas ou quando há ajustes nos requisitos de transporte, como novas transportadoras ou ajustes em prioridades de rota.
Benefícios da Funcionalidade:
Flexibilidade: Capacidade de adaptar rapidamente o fluxo de trabalho conforme mudanças no processo logístico.
Eficiência: Melhoria na eficiência da operação, já que os volumes serão desviados para as rampas corretas sem necessidade de intervenções manuais.
Escalabilidade: O cliente pode criar múltiplos layouts e alternar entre eles conforme o volume de operações ou mudanças nos requisitos logísticos.

---
**Origem:** [I23.3503] 2023 — `I23.3503- ESPECIFICACAO DE SOFTWARE - PROJETO Eletro REV .1.docx`  
**Heading:** Funcionalidade de Mapa de Sorter no WCS  
**Score:** — (nome-topico) | **ID:** 2deecb88393385d5

O WCS terá uma funcionalidade robusta que permitirá ao cliente definir as rampas vinculadas a cada transportadora e rota. Essa funcionalidade proporcionará flexibilidade na operação, permitindo a criação de diversos layouts pré-definidos para o mapa de sorter, que poderão ser facilmente trocados conforme as necessidades operacionais do cliente.
Definição do Mapa de Sorter: O cliente poderá vincular uma rampa específica a cada rota e transportadora de acordo com sua operação logística. Isso garante que os volumes sejam enviados para as rampas corretas, alinhando o fluxo de separação e expedição aos requisitos do cliente.
OBS: O agrupador não pode ser vinculado a mais de uma rampa. Caso já esteja associado a uma rampa, será automaticamente desvinculado para permitir o novo vínculo, sem necessidade de intervenção manual.
Criação de Layouts Pré-definidos: O sistema permitirá a criação de layouts pré-definidos de mapas de sorter. Cada layout conterá as rampas específicas para diferentes transportadoras ou rotas, otimizando o processo de desvio dos volumes.
Facilidade de Troca de Layouts: A funcionalidade é projetada para trocas rápidas e simples entre diferentes layouts. Isso oferece ao cliente liberdade operacional, permitindo que o layout do mapa de sorter seja alterado conforme a demanda da operação, sem interrupções significativas.
Liberdade Operacional: A capacidade de alterar rapidamente o layout do mapa de sorter é essencial para que o cliente tenha controle total sobre o processo de expedição. Isso é especialmente útil em cenários de mudança de rotas ou quando há ajustes nos requisitos de transporte, como novas transportadoras ou ajustes em prioridades de rota.
Benefícios da Funcionalidade:
Flexibilidade: Capacidade de adaptar rapidamente o fluxo de trabalho conforme mudanças no processo logístico.
Eficiência: Melhoria na eficiência da operação, já que os volumes serão desviados para as rampas corretas sem necessidade de intervenções manuais.
Escalabilidade: O cliente pode criar múltiplos layouts e alternar entre eles conforme o volume de operações ou mudanças nos requisitos logísticos.

---
**Origem:** [I23.420] 2023 — `I23.420 - PROJETO BAR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV1.docx`  
**Heading:** Cenário de desvio por ID (Remessa, ID ou Pedido)  
**Score:** — (semantico) | **ID:** ef0dd993571667e9

O sorter fará a separação da carga agrupando os volumes por saída com base no padrão configurado no Velox, com as informações de remessa. ID, ou pedido. Neste cenário, será configurada uma máscara padrão por cliente, onde o sorter irá enviar para a mesma rampa de saída todos os volumes que pertencem àquele identificador único. Em uma mesma rampa de saída poderá ser configurado mais de um ID, ou até mesmo uma fila de ID's na mesma saída, em casos em que não houver as informações a caixa será enviada ao rejeito.
Não haverá integração com o WMS.

---
**Origem:** [I23.420] 2023 — `I23.420 - PROJETO BAR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV1.docx`  
**Heading:** Cenário Off-Line  
**Score:** — (semantico) | **ID:** 1d922bf91b4a6bc0

O Sorter utilizará somente o ID da unidade destinatária informada de forma padrão no código de barras para realizar a separação, sem as informações destinatárias a caixa seguirá para o rejeito.
Não haverá integração com o WMS.

---
**Origem:** [Correios] 2024 — `ESPECIFICACAO DE SOFTWARE - SLIM SORTER - REV 1.docx`  
**Heading:** Cadastro de mapa de desvio Velox  
**Score:** — (semantico) | **ID:** b0d261a8f14a92d4

No sistema Velox, o operador do sistema, deverá cadastrar os mapas de destino do Slim Sorter conforme seus destinos físicos, por exemplo com 4 destinos físicos do Slim Sorter, o mapa deve obter esses mesmos destinos cadastrados no mapa, para quando o Velox receber a informação do destino via integração ele consiga determinar a saída correta para que seja direcionado esse volume.

---
**Origem:** [I24.101] 2024 — `I24.101 - ESPECIFICACAO DE SOFTWARE - REV. 1.docx`  
**Heading:** Mapa de sorter  
**Score:** — (nome-topico) | **ID:** 827b7157c4e02a82

Para o correto funcionamento do sorter contemplando seu mapa de destinos (rotas) e suas verificações como o processo de checkout o Velox terá disponível os cenários abaixo:

---
**Origem:** [I24.101] 2024 — `I24.101 - ESPECIFICACAO DE SOFTWARE - REV. 1.docx`  
**Heading:** Alocação por Transportadora  
**Score:** — (semantico) | **ID:** 35111a9705fd549d

Teremos a possibilidade de atrelar as transportadoras por rampa, sendo somente uma transportadora por rampa, esse mapeamento será usado no processo de alocação automática, onde o Velox verifica se o pedido que passou no portal já tem alguma posição PTM e destina o volume para o respectiva rampa/posição. Se não houver, ele realizará o vínculo desse pedido na primeira posição disponível de acordo com mapa de sorter, podendo a mesma transportadora estar atrelada a uma ou mais rampas.
OBS: A mesma transportadora pode ser alocada em uma ou mais rampas.
A disponibilidade das posições do PTM impactam diretamente na liberação das tarefas no Order Start.

---
**Origem:** [I24.101] 2024 — `I24.101 - ESPECIFICACAO DE SOFTWARE - REV. 1.docx`  
**Heading:** Rampas do Sorter  
**Score:** — (nome-topico) | **ID:** 5435b3610d0cc827

Em cada saída/rampa do sorter deverá conter os equipamentos listados abaixo, para que o operador consiga realizar a leitura do volume desviado.
Quantidades abaixo, por rampa.
01 (um) Leitor de código de barras – Ex. Honeywell (com cabo serial db9)
01 (um) Conversor RS232 – Modelo HF5111B
01 (um) Tela/monitor – Ex: Tv Samsung.

---
**Origem:** [I24.114] 2024 — `I24.114 - ESPECIFICACAO DE SOFTWARE - PROJETO ANDREANI_ES - Rev 2.docx`  
**Heading:** Mapa de Sorter  
**Score:** — (nome-topico) | **ID:** 54dc67276dadccc4

Será possível vincular transportadoras às rampas, sendo permitido apenas uma transportadora por rampa. Esse mapeamento será utilizado no processo de alocação automática.
Ao passar pelo portal de leitura, o sistema verificará as informações dos volumes:
Pedido não integrado: o volume será desviado para conferência.
Pedido integrado e conferido: o volume seguirá para o sorter e será desviado conforme o mapa cadastrado.
As caixas de pedido (papelão) deverão conter uma etiqueta na parte superior (impressa pelo sistema MFC). Essas caixas passarão pelo portal de leitura e serão direcionadas para a rampa correspondente, de acordo com o mapa cadastrado, sem necessidade de conferência.
Volumes que apresentarem as seguintes irregularidades serão encaminhados para a rampa de rejeito:
Etiqueta rasurada.
Ausência de etiqueta.
Etiqueta fora da posição.
Etiqueta não cadastrada no mapa devido a erro de integração.
Rampas cheias.
Observação: Deve-se respeitar a diretriz "1 x 1", ou seja, uma rampa dedicada para cada transportadora.

---
**Origem:** [I24.173] 2024 — `I24.173 - PROJETO CANDELÁRIA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV.2.docx`  
**Heading:** Mapa Sorter  
**Score:** — (nome-topico) | **ID:** 8369a8c9d5cf8927

O Mapa Sorter é a funcionalidade (tela) do Velox que permite a criação de 1 (um) ou mais mapas do sorter, é necessário o cadastro de destinos para realizar o vínculo dos destinos/rota as rampas.
As rampas serão cadastradas pelo time Invent, todas as interações do time Beira Rio com o Velox serão previamente explicadas junto ao treinamento sistêmico que será ministrado junto ao time operacional do CD em Candelária.

---
**Origem:** [I24.173] 2024 — `I24.173 - PROJETO CANDELÁRIA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV.2.docx`  
**Heading:** Rampas  
**Score:** — (nome-topico) | **ID:** a7172e78e0fbddae

As 12 (doze) primeiras rampas de acordo com o fluxo dos transportadores serão utilizadas para desvio efetivos para suas respectivas rotas (transportadoras) e a última rampa será o rejeito.

---
**Origem:** [I24.203] 2024 — `I24.203 - ESPECIFICACAO DE SOFTWARE - PROJETO BETTA-REV. 1.docx`  
**Heading:** Mapa de Sorter  
**Score:** — (nome-topico) | **ID:** a85822fb293788a2

Será possível vincular transportadoras às rampas, sendo permitido apenas uma transportadora por rampa. Esse mapeamento será utilizado no processo de alocação automática.
Ao passar pelo portal de leitura, o sistema verificará as informações dos volumes:
Pedido não integrado: o volume será desviado para conferência.
Pedido integrado e conferido: o volume seguirá para o sorter e será desviado conforme o mapa cadastrado.
As caixas de pedido (papelão) deverão conter uma etiqueta na parte superior (impressa pelo sistema MFC). Essas caixas passarão pelo portal de leitura e serão direcionadas para a rampa correspondente, de acordo com o mapa cadastrado, sem necessidade de conferência.
Volumes que apresentarem as seguintes irregularidades serão encaminhados para a rampa de rejeito:
Etiqueta rasurada.
Ausência de etiqueta.
Etiqueta fora da posição.
Etiqueta não cadastrada no mapa devido a erro de integração.
Rampas cheias.
Observação: Deve-se respeitar a diretriz "1 x 1", ou seja, uma rampa dedicada para cada transportadora.

---
**Origem:** [I24.205] 2024 — `I24.205 - ESPECIFICACAO DE SOFTWARE - PROJETO PROMOFARMA _REV1.docx`  
**Heading:** Mapa do Sorter  
**Score:** — (nome-topico) | **ID:** 06b8e554c3156314

Será realizado um mapa do sorter pelo time Promofarma onde será vinculado as rotas que o WCS recebe via integração e a rampa de desvio.
Através deste mapa, o WCS responde em qual rampa o volume lido no sorter deve ser desviado para as tratativas posteriores
É de responsabilidade do cliente a confecção do mapa do sorter.
Caso um volume seja lido no sorter e não tenha rota cadastrada no mapa, a caixa será direcionada para rejeito por motivo “sem rota”.

---
**Origem:** [I25.132] 2025 — `I25.132- ESPECIFICACAO DE SOFTWARE - PROJETO ESCOPO DIA.docx`  
**Heading:** Mapa do Sorter  
**Score:** — (nome-topico) | **ID:** 29990228ea3f8b2d

Para o correto funcionamento do sorter, incluindo seu mapa de destinos (rotas) e os processos de verificação, como o checkout, o sistema VELOX seguirá o seguinte cenário:
Configuração do Mapa de Destinos
Deve ser criado um mapa do sorter que vincule as lojas e o tipo de produto às rampas, sendo permitida a alocação de apenas uma loja por PTL.
Cada loja que será vinculada a uma posição deve informar o tipo de produto que será alocado. As opções serão: Alimentos, não alimentos, Todos os Produtos.
A automação será responsável por desviar os volumes conforme o mapa configurado no sorter.
Observação: A mesma loja com o mesmo tipo de pallet não pode ser associada a mais de uma rampa ou PTL.

---
**Origem:** [I25.132] 2025 — `Opção 02 - Consinco - ESPECIFICACAO DE SOFTWARE docx.docx`  
**Heading:** Mapa do Sorter  
**Score:** — (nome-topico) | **ID:** d411ad8c5df28246

Para o correto funcionamento do sorter, incluindo seu mapa de destinos (rotas) e os processos de verificação, como o checkout, o sistema VELOX seguirá o seguinte cenário:
Configuração do Mapa de Destinos
Deve ser criado um mapa do sorter que vincule as lojas e o tipo de produto às rampas, sendo permitida a alocação de apenas uma loja por PTL.
Cada loja que será vinculada a uma posição deve informar o tipo de produto que será alocado. As opções serão: Alimentos Fardos, Alimentos Caixas, não alimentos Fardos, não alimentos Fardos, Todos os Produtos Fardos, Todos os Produtos Caixas.
A automação será responsável por desviar os volumes conforme o mapa configurado no sorter.
Observação: A mesma loja com o mesmo tipo de pallet não pode ser associada a mais de uma rampa ou PTL.

---
**Origem:** [I25.215] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJETO BP REV .2.docx`  
**Heading:** Mapa de Sorter  
**Score:** — (nome-topico) | **ID:** bbaa8c11a4ccc710

O WCS terá uma funcionalidade robusta que permitirá a operação definir as rampas vinculadas a cada Transportadora. Essa funcionalidade proporcionará flexibilidade na operação, permitindo a criação de diversos layouts pré-definidos para o mapa de sorter, que poderão ser facilmente trocados conforme a necessidade operacional.
Definição do Mapa de Sorter: A operação poderá vincular uma rampa específica a uma transportadora de acordo com sua operação logística. Isso garante que os volumes sejam enviados para as rampas corretas, alinhando o fluxo de separação e expedição aos requisitos da operação

---
**Origem:** [I25.8049] 2025 — `I25.8049 - ESPECIFICACAO DE SOFTWARE - PROJETO TITANO REV. 1.docx`  
**Heading:** Alteração na Etiqueta do Cliente  
**Score:** — (semantico) | **ID:** 296ec2f5686becf0

Atualmente, o sorter existente realiza os desvios com base em um código fixado na etiqueta, que já informa diretamente a rampa de destino.
No novo modelo, o cliente realizará uma alteração na composição da etiqueta:
O código de barras que informava diretamente a rampa será alterado;
Em seu lugar será utilizado um código já existente no processo, que representa o número do volume.
Com essa alteração:
O sorter passará a utilizar o número do volume para consultar o WMS via WCS;
O WMS retornará, em tempo real, a rampa de destino e a autorização de desvio;
O processo de desvio deixa de ser fixo e passa a ser dinâmico e controlado pelo WMS, aumentando a rastreabilidade e a flexibilidade operacional.
Alteração Da etiqueta atual:

---
**Origem:** [I25.] 2025 — `2- ESPECIFICACAO DE SOFTWARE - PROJETO ESCOPO CDSK.docx`  
**Heading:** Funcionalidade de Mapa de Sorter no WCS  
**Score:** — (nome-topico) | **ID:** a945c06b9a18518e

O WCS terá uma funcionalidade robusta que permitirá a operação definir as rampas vinculadas a cada Loja e Categoria do Produto e Podendo habilitar a função de separar por Tipo de Embalagem (Caixa e Fardo). Essa funcionalidade proporcionará flexibilidade na operação, permitindo a criação de diversos layouts pré-definidos para o mapa de sorter, que poderão ser facilmente trocados conforme a necessidade operacional.
Definição do Mapa de Sorter: A operação poderá vincular uma rampa específica a uma Loja e Categoria do Produto e Tipo de Embalagem de acordo com sua operação logística. Isso garante que os volumes sejam enviados para as rampas corretas, alinhando o fluxo de separação e expedição aos requisitos da operação.
OBS: O agrupador pode ser vinculado a mais de uma rampa simultaneamente. Caso o destino já esteja associado a uma rampa, o WCS deve cadenciar esses volumes para não sobrecarregar uma única rampa dividindo a ordem de desvios entre as rampas com o destino vinculado.
Criação de Layouts Pré-definidos: O sistema permitirá a criação de layouts pré-definidos de mapas de sorter. Cada layout conterá as rampas específicas para diferentes Lojas e Categoria do Produto, Tipo de Embalagem, otimizando o processo de desvio dos volumes.
Facilidade de Troca de Layouts: A funcionalidade é projetada para trocas rápidas e simples entre diferentes layouts. Isso oferece a operação liberdade operacional, permitindo que o layout do mapa de sorter seja alterado conforme a demanda da operação, sem interrupções significativas.
Liberdade Operacional: A capacidade de alterar rapidamente o layout do mapa de sorter é essencial para que a operação tenha controle total sobre o processo de expedição. Isso é especialmente útil em cenários de mudança de rotas ou quando há ajustes nos requisitos de transporte, como novas transportadoras ou ajustes em prioridades de rota.
Benefícios da Funcionalidade:
Flexibilidade: Capacidade de adaptar rapidamente o fluxo de trabalho conforme mudanças no processo logístico.
Eficiência: Melhoria na eficiência da operação, já que os volumes serão desviados para as rampas corretas sem necessidade de intervenções manuais.
Escalabilidade: A operação pode criar múltiplos layouts e alternar entre eles conforme o volume de operações ou mudanças nos requisitos logísticos.
