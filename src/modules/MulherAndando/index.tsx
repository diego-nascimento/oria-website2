'use client';

import { MaxWidth } from '@/shared/components/MaxWidth';
import { Box, Stack, Typography, useTheme } from '@mui/material';

export const MulherAndando = () => {
  const theme = useTheme();

  return (
    <Stack>
      <Stack
        position={'relative'}
        sx={{
          backgroundImage: 'url(videomuie.mp4)',
          overflow: 'hidden',
        }}
      >
        <MaxWidth>
          <Stack
            paddingX={2}
            paddingY={{
              xs: 8,
              md: 16,
            }}
            alignItems={'flex-end'}
            justifyContent={'center'}
          >
            <Stack justifyContent={'center'}>
              <Stack alignItems={'flex-end'}>
                <Stack
                  bgcolor={theme.palette.background.paper}
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
              </Stack>
            </Stack>
          </Stack>
        </MaxWidth>
        <Stack
          sx={{
            width: '130vw',
            objectFit: 'cover',
            position: 'absolute',
            left: '0',
            right: '0',
            top: '40',
            bottom: '0',
            zIndex: '-1',
          }}
        >
          <video autoPlay loop muted>
            <source src={'videomuie.mp4'} type="video/mp4" />
          </video>
        </Stack>
      </Stack>
    </Stack>
  );
};
