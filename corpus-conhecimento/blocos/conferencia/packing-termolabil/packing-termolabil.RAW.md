# packing-termolabil.RAW — Evidência Bruta

<!-- APPEND-ONLY — gerado pelo roteador (corpus-full.jsonl) -->

---
**Origem:** [I24.215] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP.docx`  
**Heading:** Packing Fracionado e Packing Termolábil  
**Score:** — (nome-topico) | **ID:** 10e6941410e38529

Para os volumes que passarem pelo processo de packing após o Picking Fracionado e o Picking Termolábil, será utilizado o seguinte layout de etiqueta:

---
**Origem:** [I24.215] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJETO BP REV .2.docx`  
**Heading:** Packing Fracionado e Packing Termolábil  
**Score:** — (nome-topico) | **ID:** 932f77e7cac0858b

Para os volumes que passarem pelo processo de packing após o Picking Fracionado e o Picking Termolábil, será utilizado o seguinte layout de etiqueta:

---
**Origem:** [I24.215] 2025 — `I24_215_ESPECIFICACAO_SOFTWARE_PROJ_BP_Rev12.docx`  
**Heading:** Packing Fracionado e Packing Termolábil  
**Score:** — (nome-topico) | **ID:** aabdb5976b946537

Para os volumes que passarem pelo processo de packing após o Picking Fracionado e o Picking Termolábil, será utilizado o seguinte layout de etiqueta:

---
**Origem:** [I22.120] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** Tipo de separação  
**Score:** — (semantico) | **ID:** 560611a72c2e6719

Existem 2 tipos de separação padrão e mista, sendo a separação padrão a forma que determina que todos os materiais de temperatura congelada devem ser separados primeiro e os materiais de temperatura resfriada devem ser separados depois da separação de todos os materiais congelados ao menos que tenha reabastecimento em andamento nesse caso o resfriado é iniciado. Já o tipo de separação mista iguala a prioridade de separação onde independente da temperatura do material a prioridade na separação é a mesma.
Para que essa funcionalidade respeite essa necessidade parametrizada através do tipo de separação o WCS terá os multiplicadores por temperatura, onde quando o tipo de separação for padrão o multiplicador da temperatura congelada será 1 e da temperatura resfriada será 2 e caso o tipo de separação for mista, ambas as temperaturas receberam o mesmo multiplicador, que será 1.
Após a seleção de tipo de separação é necessário fazer a seleção de docas auxiliares por temperatura.
Existem dois tipos de docas principais e auxiliares, as docas principais sempre viram no IDOC de remessa (TPSDLS - ZSDDAREM) e sempre serão utilizadas para receber os volumes separados, já as docas auxiliares podem ser escolhidas diretamente no WCS sem restrições de escolha em relação a outros transportes ou onda, porém se a doca estiver em uso não será permitido o início da onda.

---
**Origem:** [I22.1732] 2023 — `- ESPECIFICACAO DE SOFTWARE - PROJETO FLOWER .docx`  
**Heading:** Packing Fracionado e Packing Termolábil  
**Score:** — (nome-topico) | **ID:** c8bf28c63cc28f16

Para os volumes que passarem pelo processo de packing após o Picking Fracionado e o Picking Termolábil, será utilizado o seguinte layout de etiqueta:
