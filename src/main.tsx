import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { LicenseInfo } from '@mui/x-license';
import theme from './theme';
import App from './App.tsx';
import './index.css';

LicenseInfo.setLicenseKey(import.meta.env.VITE_MUI_PRO_KEY ?? '');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>,
);
