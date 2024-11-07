'use client';
import { Box, Stack, Typography } from '@mui/material';
import { useInView } from 'react-intersection-observer';

export const Container = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  return (
    <Stack
      ref={ref}
      bgcolor={'background.paper'}
      borderRadius={4}
      padding={4}
      maxWidth={{
        xs: '400px',
        lg: '35vw',
      }}
      className={'awaitingAnimateRight awaitAnimateBlur'}
      sx={{
        animation: inView
          ? 'animateRight 1s forwards, animateBlur 1s forwards'
          : '',
      }}
    >
      <Typography
        fontSize={{
          xs: 20,
          lg: 32,
        }}
        textAlign={'right'}
      >
        Mesmo que você{' '}
        <Box component={'strong'} color={'#001f3f'}>
          acredite
        </Box>{' '}
        que não ​existe{' '}
        <Box component={'strong'} color={'#001f3f'}>
          saída
        </Box>
        , saiba que é{' '}
        <Box component={'strong'} color={'#001f3f'}>
          possível​ construir
        </Box>{' '}
        uma realidade mais​{' '}
        <Box component={'strong'} color={'#001f3f'}>
          funcional
        </Box>{' '}
        e com mais <strong>qualidade ​de vida</strong>.
      </Typography>
    </Stack>
  );
};
