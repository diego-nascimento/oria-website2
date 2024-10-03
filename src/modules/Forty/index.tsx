'use client';

import { Box, Stack, Typography, useTheme } from '@mui/material';

export const Forty = () => {
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
        py={10}
        px={2}
        borderRadius={4}
        marginLeft={{
          xs: 0,
          lg: 80,
        }}
        marginBottom={{
          xs: 0,
          lg: 10,
        }}
        maxWidth={{
          xs: '100%',
          lg: '30vw',
        }}
      >
        <Typography
          fontSize={{
            xs: 24,
            lg: 38,
          }}
          textAlign={'right'}
        >
          Mesmo que você{' '}
          <Box component={'strong'} color={'#000'}>
            acredite
          </Box>{' '}
          que não ​existe{' '}
          <Box component={'strong'} color={'#000'}>
            saída
          </Box>
          , saiba que é{' '}
          <Box component={'strong'} color={'#000'}>
            possível​ construir
          </Box>{' '}
          uma realidade mais​{' '}
          <Box component={'strong'} color={'#000'}>
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
