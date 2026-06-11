import { createTheme } from '@mui/material/styles';

const Y = '#ffc500';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: Y,
      contrastText: '#1a1a1a',
    },
    background: {
      default: '#1a1a1a',
      paper: '#242424',
    },
    divider: '#3a3a3a',
    text: {
      primary: '#e0e0e0',
      secondary: '#999999',
      disabled: '#666666',
    },
    error: {
      main: '#dc2626',
    },
    action: {
      hover: 'rgba(255, 197, 0, 0.06)',
      selected: 'rgba(255, 197, 0, 0.10)',
    },
  },
  shape: {
    borderRadius: 12,
  },
  typography: {
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    fontSize: 14,
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '*': { boxSizing: 'border-box' },
        'html, body, #root': { height: '100%', width: '100%' },
        body: { WebkitFontSmoothing: 'antialiased' },
        '::-webkit-scrollbar': { width: 6, height: 6 },
        '::-webkit-scrollbar-track': { background: 'transparent' },
        '::-webkit-scrollbar-thumb': { background: '#3a3a3a', borderRadius: 3 },
        '::-webkit-scrollbar-thumb:hover': { background: '#555' },
      },
    },
    MuiPaper: {
      defaultProps: { elevation: 0 },
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          border: '1px solid #3a3a3a',
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          background: '#242424',
          border: '1px solid #3a3a3a',
          borderRadius: 12,
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          fontSize: 15,
          fontWeight: 600,
          color: '#e0e0e0',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          fontSize: '0.75rem',
        },
      },
    },
    MuiIconButton: {
      defaultProps: { color: 'primary' },
      styleOverrides: {
        root: {
          '&:hover': { background: 'rgba(255, 197, 0, 0.08)' },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          borderRadius: 8,
          ...(ownerState.variant === 'contained' && ownerState.color === 'primary' && {
            color: '#1a1a1a',
            fontWeight: 700,
          }),
        }),
      },
    },
    MuiTextField: {
      defaultProps: { size: 'small', variant: 'outlined' },
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': { borderColor: '#3a3a3a' },
            '&:hover fieldset': { borderColor: '#555' },
            '&.Mui-focused fieldset': { borderColor: Y },
          },
          '& .MuiInputLabel-root.Mui-focused': { color: Y },
        },
      },
    },
    MuiSelect: {
      defaultProps: { size: 'small' },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize: 13,
          '&.Mui-selected': {
            background: 'rgba(255, 197, 0, 0.10)',
            color: Y,
          },
          '&.Mui-selected:hover': { background: 'rgba(255, 197, 0, 0.14)' },
        },
      },
    },
    MuiTooltip: {
      defaultProps: { arrow: true },
      styleOverrides: {
        tooltip: {
          fontSize: 11,
          backgroundColor: '#0e0e0e',
          color: '#d0d0d0',
          border: '1px solid #3a3a3a',
          boxShadow: '0 4px 14px rgba(0,0,0,0.5)',
          padding: '6px 10px',
          borderRadius: 6,
          maxWidth: 280,
          lineHeight: 1.5,
        },
        arrow: {
          color: '#0e0e0e',
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: { borderColor: '#3a3a3a' },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontSize: 13,
          fontWeight: 500,
          color: '#999',
          '&:hover': { background: '#242424', color: '#e0e0e0' },
          '&.Mui-selected': {
            background: 'rgba(255, 197, 0, 0.08)',
            color: Y,
            borderLeft: `3px solid ${Y}`,
            paddingLeft: 9,
            '&:hover': { background: 'rgba(255, 197, 0, 0.12)' },
          },
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          fontSize: 11,
          fontWeight: 600,
          border: 'none',
          borderRadius: '6px !important',
          color: '#666',
          padding: '5px 12px',
          '&.Mui-selected': {
            background: Y,
            color: '#1a1a1a',
            '&:hover': { background: '#e6b200' },
          },
        },
      },
    },
    MuiToggleButtonGroup: {
      styleOverrides: {
        root: {
          background: '#1a1a1a',
          border: '1px solid #3a3a3a',
          borderRadius: 8,
          padding: 4,
          gap: 3,
        },
      },
    },
  },
});

export default theme;
