import { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { GerarDocumento } from './GerarDocumento';
import { ApontamentoHoras } from './ApontamentoHoras';

type DocTab = 'gerar' | 'horas';

export function DocumentacaoPage() {
  const [tab, setTab] = useState<DocTab>('gerar');

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden' }}>
      <Box sx={{ borderBottom: '1px solid', borderColor: 'divider', px: 3, flexShrink: 0 }}>
        <Tabs
          value={tab}
          onChange={(_, v: DocTab) => setTab(v)}
          sx={{
            minHeight: 42,
            '& .MuiTab-root': {
              fontSize: 12,
              fontWeight: 600,
              minHeight: 42,
              textTransform: 'none',
              py: 0,
              px: 2,
            },
          }}
        >
          <Tab value="gerar" label="Gerar Documento" />
          <Tab value="horas" label="Apontamento de Horas" />
        </Tabs>
      </Box>

      <Box sx={{ flex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
        {tab === 'gerar' && (
          <Box sx={{ flex: 1, overflow: 'auto' }}>
            <GerarDocumento />
          </Box>
        )}
        {tab === 'horas' && <ApontamentoHoras />}
      </Box>
    </Box>
  );
}
