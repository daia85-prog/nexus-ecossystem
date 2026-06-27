# Dicionário de Campos do Kickoff (KickoffPage.tsx)

> Referência única para gerar os CARDs. Cada campo: `id` → label · tipo · opções (com tradução) · gate/dependência. Multi-select usa `|||` como separador. `tbd`/vazio = a definir → omitir seção. `to(v)` traduz código→label.

## Legenda de opções (objeto `O`)
- **YN**: `yes`=Sim · `no`=Não · `tbd`=A definir
- **RS** (responsabilidade): `wcs`=WCS · `wms_only`=WMS · `both_wms_wcs`=Ambos · `tbd`
- **FN** (fornecedor): `invent`=Invent · `client`=Cliente · `both_resp`=Ambos · `tbd`
- Caixas: `tote_plastic`=Tote/Plástica · `cardboard`=Papelão · `fardo`=Fardo · `misto_box`=Misto · `plastic`=Plástica · `tote`=Tote
- Dispositivos: `desktop` · `tablet` · `collector`=Coletor · `pdv_dev`=PDV · `col_dev`=Coletor
- Scanner: `scan_fix`=Fixo · `scan_man`=Manual · `sc_hand`=Scanner de mão · `sc_fixed`=Scanner fixo
- Bipagem: `bip_yes`=Obrigatória · `bip_no`=Não · `bip_param`=Parametrizável
- LED: `led_mode`=LED · `bar_mode`=Cód. barras · `led3`=LED 3 díg · `led10`=LED 10 díg
- Giro: `both_turn`=Ambos · `high_turn`=Alto · `med_turn`=Médio · `low_turn`=Baixo
- Destino pós-coleta: `dest_pbl`=Completa PBL · `dest_conf`=Conferência · `dest_pack`=Packing
- Full case método: `fc_coletor`=Coletor · `fc_etiq_led`=Etiq+LED · `fc_etiq`=Etiqueta · `fc_hw_col`=Coletor Android · `fc_hw_pdv`=PDV+Scanner de Mão
- Conferência tipo (`cf_t1`): `conf_blind`=Cega · `conf_item`=Item a Item · `conf_multi`=Multiplicador · `conf_ean`=Bipa EAN
- Conferência desvio (`cf_t2`): `conf_weight`=Balança · `conf_rfid`=RFID · `conf_sample`=Amostragem · `conf_client`=Por cliente · `conf_product`=Por produto · `conf_100`=100% itens
- Impressão: `imp_manual`=Manual · `imp_auto`=Automática
- Integração: `rest`=REST · `idoc`=IDoc · `dblink`=DBLink · `excel`=Excel · `json_api`=JSON via API · `json_pasta`=JSON em pasta · `outro`=Outro
- Paletização (`pt1`): `no_pal`=Sem paletização · `ptl_opt`=PTL · `ptm_opt`=PTM · `aloca_opt`=Aloca Pallet
- Display PTL: `ptl_hw`=PTL (displays físicos) · `tablet_ptl`=Tablet
- Critério desvio rampa: `regiao`=Região · `transp`=Transportadora · `filial`=Filial/Destino
- Infra: `srv_invent`=Invent · `srv_client`=Cliente · `srv_shared`=Compartilhada · `single_srv`=Único · `sep_srv`=Separados · `onprem`=On-premise · `saas`=SaaS · `cloud`=Cloud · `hybrid`=Híbrido · `win`=Windows · `linux`=Linux · `mssql`=SQL Server · `pg`=PostgreSQL · `oracle`=Oracle · `mysql`=MySQL

## Campos por seção (id · label · tipo · opções · [gate: dep])

### 1. Info Gerais (ge)
- `g1` Cliente (text) · `g2` Código do Projeto (text) · `g_codinome` Codinome (text) · `g3` Local do CD (text)
- `g4` Novo ou aditivo? (select: new_proj/additive/tbd) · `g4a` Escopo do aditivo (textarea) [g4:additive]
- `g5` Sistema do Cliente / WMS (wms) · `g_golive` GoLive alvo (text) · `g_layout_ref` Layout Semelhante (text)

### 2. Layout e Caixas (la)
- `c2` Múltiplos tipos de caixa? (YN) · `l1` Tipo Caixa (select: tote_plastic/cardboard/fardo/misto_box) [c2:no] · `l1_m` Tipo Caixa (multi) [c2:yes]
- `l3` Tem mezanino? (YN) · `l5` Quantos níveis? (text) [l3:yes] · `l6` Tem AMR? (YN)

### 3. Cubagem (cu)
- `cu1` Tem Cubagem? (YN) **[GATE]** · `c1` Quem faz cubagem? (select: wcs/wms_only/tbd)

### 4. Integração (in)
- `in1` Tipo integração (select: rest/idoc/dblink/excel/json_api/json_pasta/outro/tbd) · `in1b` Tipo integração 2 (select, idem)
- `in_endpoint` Endpoint/URL (text) · `in3` Timeout ms (text)

### 5. Order Start (os)
- `os_gate` Tem Order Start? (YN) **[GATE]** · `os_r` Responsabilidade WCS/WMS (RS) · `os1` Quantos Order Starts? (text)
- `os_imp_etq` Imprime etiqueta no OS? (YN) · `os4` Vinculação de caixa (select: scan_fix/scan_man/tbd) · `os5` OS por nível? (YN)

### 6. PBL / FlowRack (pb) — campos extras em PBL_Q
- `p1` Tem PBL/FlowRack? (YN) **[GATE]** · `pk_tp` Throughput linha cx/h (text) · `pk_es` WCS gerencia estoque picking? (select: wcs/wms_only/tbd)
- **PBL_Q (por linha):** `p_r` Resp (RS) · `p_m` LED ou cód. barras? (led_mode/bar_mode) · `p_led` Tipo LED (led3/led10) [p_m:led_mode] · `p_g` Giro (both/high/med/low_turn) · `p2` Estações (text) · `p_pdv` Tem PDV? (YN) · `p_pdv_f` Quem fornece PDV (FN) · `p_sct` Tipo scanner (sc_hand/sc_fixed) · `p_sc_f` Quem fornece scanner (FN) · `p3` Bipagem EAN? (bip_yes/bip_no/bip_param) [p_sct:sc_hand] · `p3b` Bipagem EAN? [p_sct:sc_fixed] · `p_pf` Posições frente (text) · `p10` Picking costas? (YN) · `p_pc` Posições costas (text) [p10:yes] · `p10l` Costas tem LED? (YN) [p10:yes] · `p10lt` Tipo LED costas (led3/led10) [p10l:yes] · `p_re` Quem fornece equip PBL (FN) · `s1p` Corte exige supervisor? (YN) · `s2p` Pede Caixa? (YN) · `s3p` Motivo corte obrigatório? (YN)

### 7. Picking Cart (ct)
- `ct1` Tem Picking Cart? (YN) **[GATE]** · `ct_r` Resp (RS) · `ct_qc` Qtd carrinhos (text) · `ct2` Posições/carrinho (text)
- `ct_d` Dispositivo (pdv_dev/col_dev/tbd) · `ct_df` Quem fornece dispositivo (FN) · `ct6` Destino pós-coleta (dest_pbl/dest_conf/dest_pack/tbd)
- `s1c` Corte exige supervisor? (YN) · `s2c` Pede Caixa? (YN)

### 8. Full Case (fc)
- `fc1` Tem Full Case? (YN) **[GATE]** · `fc_r` Resp (wcs/wms_only/both_wms_wcs/tbd) · `fc2` Método (fc_coletor/fc_etiq_led/fc_etiq) [fc_r:wcs] · `fc2b` Método [fc_r:both_wms_wcs]
- `fc_i` Tem impressora? (YN) · `fc_if` Quem fornece impressora (FN) [fc_i:yes]
- `fc_conf` Tem Conferência? (yes/no/tbd) ⟷ espelha `cf_gate` · `fc_conf_hw` Hardware conferência (fc_hw_col/fc_hw_pdv) [fc_conf:yes] · `fc_conf_forn` Coletor Android fornecimento (FN) [fc_conf:no]

### 9. Conferência & Packing (pk)
- `cf_gate` Tem Conferência? (yes/no/tbd) **[GATE]** ⟷ espelha `fc_conf`
- `cf_t1` Tipo de conferência (multi: conf_blind/conf_item/conf_multi/conf_ean/tbd) [cf_gate:yes]
- `cf2` Estações de conferência (text) [cf_gate:yes]
- `cf_t2` Motivos de desvio (multi: conf_weight/conf_rfid/conf_sample/conf_client/conf_product/conf_100/tbd) [cf_gate:yes]
- `cf4` Tolerância da balança (text) [cf_gate:yes]
- `pk1` Tem Packing? (yes/no/tbd) **[GATE packing]** · `pk_auto` Packing automático? (YN) [pk1:yes] · `pk_imp` Tem impressora no packing? (YN) [pk1:yes] · `pk_imp_f` Quem fornece (FN) [pk_imp:yes] · `pk_imp_t` Impressão manual/automática (imp_manual/imp_auto) [pk_imp:yes] · `pk_troca` Troca de caixa? (YN) [pk1:yes] · `pk_etiq` Troca etiqueta? (YN) [pk1:yes]

### 10. Sorter (so)
- `st1` Tem Sorter? (YN) **[GATE]** · `st2` Rampas saída (text) · `st3` Rejeito (text) · `st_cap` Capacidade vol/h (text) · `st4` SLA Portal→1º HPD (text)
- `st5` Indução (text) · `st6` Portal leitura: faces? (text) · `st_criterio` Critério desvio rampa (regiao/transp/filial/outro/tbd) · `st7` Cross-check? (YN) **[GATE cross-check]**
- `st10` Sinaleiro nas Rampas? (yes/no/tbd) · `st11` IA? (YN) · `st11_tvs` Qtd TVs IA (text) [st11:yes] · `st_rc` Recirculação? (YN) · `st_ag` Agrupador da rampa (text)

### 11. Palletização & PTL (pt)
- `pt_gate` Tem Palletização & PTL? (YN) **[GATE]** · `pt1` Tipo palletização (no_pal/ptl_opt/ptm_opt/aloca_opt/tbd) · `pt3` Posições (text)
- `pt_frag` Matriz de fragilidade? (YN) · `pt_ag` Agrupador (text) · `pt8` Itens perigosos? (YN) · `pt9` Romaneio? (YN)
- `pt_tem_ptl` Tem displays PTL? (YN) **[GATE ptl-alocacao]** · `pt_tipo_disp` Tipo display (ptl_hw/tablet_ptl/outro) [pt_tem_ptl:yes] · `pt_tvs_ptl` Qtd TVs PTL (text) [pt_tem_ptl:yes]
- `pt_ptm` Tem PTM (Put to Monitor)? (YN) **[GATE ptm]** · `pt_ptm_qtd` Qtd TVs PTM (text) [pt_ptm:yes]

### 12. Gestão de Estoque (es)
- `es1` Tem Gestão de Estoque? (YN) **[GATE reabastecimento/recebimento]** · `es2` Reabastecimento auto? (YN) · `es3` Reab. pelo Sorter? (YN)
- `es4` Inventário? (YN) **[GATE inventario]** · `es5` Recall? (YN) · `es6` Mov. Forçada? (YN) · `es7` Curva ABC? (YN) · `es8` Range dias (text) [es7:yes] · `es10` Double check? (YN)

### 13. Etiquetas (et)
- `et_r` Responsabilidade etiquetas (wcs/wms_only/tbd) **[GATE: wcs=capítulo completo; wms_only=enxuto]** · `et1` Total impressoras (text) · `et_dist` Distribuição (text)

### 14. Infraestrutura (if)
- `if_resp_infra` Responsável Infra (srv_invent/srv_client/srv_shared/tbd) · `if_resp_srv` Responsável Servidores (idem) · `if_ambiente` Tipo ambiente (onprem/saas/cloud/hybrid)
- `if_s` Servidor único/separado (single_srv/sep_srv) · `if_ambientes` Tem PRD+HML? (YN) · `if1` SO (win/linux) · `if2` BD (mssql/pg/oracle/mysql) · `if3` VLAN? (YN) · `if4` VPN? (YN)
- `if5` Estações (text) · `if6` Internet? (YN) · `if7` Specs (text) · `if8` AD/SSO? (YN) **[GATE cadastros-acessos auth]** · `if9` PLC (text) · `if10` Backup? (YN)
