import { Box, Stack, Typography } from '@mui/material';

export const Container = () => {
  return (
    <Stack
      bgcolor={'background.paper'}
      borderRadius={4}
      padding={4}
      maxWidth={{
        xs: '400px',
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
  );
};
