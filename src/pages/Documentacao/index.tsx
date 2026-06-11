import { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { ComingSoon } from '../ComingSoon';
import { GerarDocumento } from './GerarDocumento';

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

      <Box sx={{ flex: 1, overflow: 'auto' }}>
        {tab === 'gerar' && <GerarDocumento />}
        {tab === 'horas' && (
          <ComingSoon
            iconType="config"
            title="Apontamento de Horas"
            description="Registro de horas por projeto, tarefa e colaborador. Em breve."
          />
        )}
      </Box>
    </Box>
  );
}
