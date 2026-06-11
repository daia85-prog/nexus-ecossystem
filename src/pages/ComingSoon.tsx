import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import FolderRoundedIcon from '@mui/icons-material/FolderRounded';
import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';

type IconType = 'projetos' | 'pendencias' | 'dashboard' | 'config';

const ICONS: Record<IconType, React.ElementType> = {
  projetos:   FolderRoundedIcon,
  pendencias: WarningAmberRoundedIcon,
  dashboard:  DashboardRoundedIcon,
  config:     SettingsRoundedIcon,
};

interface ComingSoonProps {
  iconType: IconType;
  title: string;
  description: string;
}

export function ComingSoon({ iconType, title, description }: ComingSoonProps) {
  const Icon = ICONS[iconType];
  return (
    <Box
      className="page-enter"
      sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100%', p: 5 }}
    >
      <Box sx={{ textAlign: 'center', maxWidth: 360 }}>
        <Paper
          sx={{
            width: 72,
            height: 72,
            borderRadius: '20px',
            bgcolor: 'rgba(255,197,0,0.06)',
            borderColor: 'rgba(255,197,0,0.20)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mx: 'auto',
            mb: 2.5,
          }}
        >
          <Icon sx={{ fontSize: 32, color: 'primary.main', opacity: 0.75 }} />
        </Paper>

        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
          {title}
        </Typography>
        <Typography sx={{ fontSize: 13, color: 'text.secondary', lineHeight: 1.6, mb: 3 }}>
          {description}
        </Typography>

        <Chip
          label="Em desenvolvimento"
          size="small"
          variant="outlined"
          sx={{
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: '0.5px',
            textTransform: 'uppercase',
            borderColor: 'divider',
            color: 'text.disabled',
          }}
        />

        {iconType === 'config' && (
          <Typography sx={{ mt: 3, fontSize: 10, color: 'text.disabled', letterSpacing: '0.3px' }}>
            Created by{' '}
            <Box component="span" sx={{ color: '#666', fontWeight: 500 }}>
              Raphael Cerri Caveagna
            </Box>
            {' '}· NEXUS v4.0
          </Typography>
        )}
      </Box>
    </Box>
  );
}
