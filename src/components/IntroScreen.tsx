import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface Props {
  onDone: () => void;
}

export function IntroScreen({ onDone }: Props) {
  const [phase, setPhase] = useState<'entering' | 'loading' | 'leaving'>('entering');

  useEffect(() => {
    // Phase sequence:
    // 0ms   : mount (logo hidden)
    // 50ms  : entering — logo slides in + opacity
    // 650ms : loading — progress bar starts filling
    // 1500ms: leaving — whole screen fades + scales out
    // 1900ms: onDone()

    const t1 = setTimeout(() => setPhase('loading'), 50);
    const t2 = setTimeout(() => setPhase('leaving'), 1400);
    const t3 = setTimeout(() => onDone(), 1850);

    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onDone]);

  return (
    <Box
      sx={{
        position: 'fixed',
        inset: 0,
        bgcolor: '#0d0d0d',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        transition: phase === 'leaving' ? 'opacity 0.42s ease, transform 0.42s ease' : 'none',
        opacity: phase === 'leaving' ? 0 : 1,
        transform: phase === 'leaving' ? 'scale(1.04)' : 'scale(1)',
        pointerEvents: 'none',
      }}
    >
      {/* Glow background */}
      <Box
        sx={{
          position: 'absolute',
          width: 320,
          height: 320,
          borderRadius: '50%',
          bgcolor: 'rgba(255,197,0,0.04)',
          filter: 'blur(60px)',
          transition: 'opacity 0.6s',
          opacity: phase === 'entering' ? 0 : 1,
        }}
      />

      {/* Logo block */}
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '6px',
          transition: 'opacity 0.55s cubic-bezier(.16,1,.3,1), transform 0.55s cubic-bezier(.16,1,.3,1)',
          opacity: phase === 'entering' ? 0 : 1,
          transform: phase === 'entering' ? 'translateY(16px)' : 'translateY(0)',
        }}
      >
        {/* Icon + wordmark row */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {/* Hexagon-style icon placeholder */}
          <Box
            component="img"
            src="/nexus-icon.png"
            alt="NEXUS"
            sx={{
              width: 40,
              height: 40,
              objectFit: 'contain',
              filter: 'drop-shadow(0 0 10px rgba(255,197,0,0.5))',
            }}
          />

          <Typography
            sx={{
              fontSize: 30,
              fontWeight: 900,
              letterSpacing: '5px',
              color: '#ffffff',
              fontFamily: 'Arial Black, sans-serif',
              textTransform: 'uppercase',
            }}
          >
            NEXUS
          </Typography>
        </Box>

        {/* Tagline */}
        <Typography
          sx={{
            fontSize: 11,
            letterSpacing: '3px',
            color: 'rgba(255,255,255,0.3)',
            textTransform: 'uppercase',
            fontWeight: 500,
            transition: 'opacity 0.5s 0.15s',
            opacity: phase === 'entering' ? 0 : 1,
          }}
        >
          by Raphael Cerri Caveagna
        </Typography>
      </Box>

      {/* Progress bar */}
      <Box
        sx={{
          position: 'relative',
          mt: '32px',
          width: 160,
          height: 2,
          borderRadius: '2px',
          bgcolor: 'rgba(255,255,255,0.07)',
          overflow: 'hidden',
          transition: 'opacity 0.4s 0.1s',
          opacity: phase === 'entering' ? 0 : 1,
        }}
      >
        <Box
          sx={{
            height: '100%',
            borderRadius: '2px',
            bgcolor: '#ffc500',
            boxShadow: '0 0 8px rgba(255,197,0,0.6)',
            transition: phase === 'loading' ? 'width 0.95s cubic-bezier(.4,0,.2,1)' : 'width 0s',
            width: phase === 'loading' || phase === 'leaving' ? '100%' : '0%',
          }}
        />
      </Box>

      {/* Version chip */}
      <Typography
        sx={{
          mt: '18px',
          fontSize: 9,
          color: 'rgba(255,255,255,0.15)',
          letterSpacing: '1.5px',
          textTransform: 'uppercase',
          transition: 'opacity 0.5s 0.2s',
          opacity: phase === 'entering' ? 0 : 1,
        }}
      >
        Kickoff WCS · v4.0
      </Typography>
    </Box>
  );
}
