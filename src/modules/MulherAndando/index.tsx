'use client';

import { Box, Stack, Typography, useTheme } from '@mui/material';

export const MulherAndando = () => {
  const theme = useTheme();
  return (
    <Stack
      overflow={'hidden'}
      height={{
        xs: '100%',
        lg: '60vh',
      }}
      paddingY={{
        xs: 14,
        lg: 0,
      }}
      position={'relative'}
      justifyContent={'center'}
      alignItems={'center'}
      paddingX={2}
    >
      <Stack
        zIndex={20}
        bgcolor={theme.palette.background.default}
        borderRadius={4}
        marginLeft={{
          xs: 0,
          lg: 80,
        }}
        padding={4}
        maxWidth={{
          xs: '100%',
          lg: '35vw',
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
      <Stack position={'absolute'}>
        <video autoPlay loop muted style={{ minWidth: '100vw' }}>
          <source src={'videomuie.mp4'} type="video/mp4" />
        </video>
      </Stack>
    </Stack>
  );
};
