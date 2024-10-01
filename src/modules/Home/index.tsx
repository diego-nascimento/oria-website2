'use client';
import { MaxWidth } from '@/shared/components/MaxWidth';
import { Box, Button, Grid2, Stack, Typography, useTheme } from '@mui/material';

export const Home = () => {
  const theme = useTheme();
  return (
    <Stack
      alignItems={'center'}
      minHeight={'100vh'}
      height={'100%'}
      bgcolor={theme.palette.secondary.main}
    >
      <MaxWidth>
        <Stack
          width={'100%'}
          justifyContent={'center'}
          minHeight={'85vh'}
          paddingX={2}
        >
          <Grid2
            marginTop={{
              xs: 2,
              lg: 0,
            }}
            container
            padding={0}
            spacing={{
              xs: 4,
            }}
            minHeight={'85vh'}
          >
            <Grid2
              size={{
                xs: 12,
                lg: 5,
              }}
              alignItems={'center'}
            >
              <Stack height={'100%'} justifyContent={'center'} gap={4}>
                <Typography
                  variant="h1"
                  textTransform={'uppercase'}
                  fontSize={'16px'}
                  fontWeight={600}
                  color="#fff"
                  letterSpacing={2}
                >
                  Psicologa de Mães Gestantes
                </Typography>
                <Typography
                  variant="h1"
                  fontSize={{
                    xs: 36,
                    md: '56px',
                  }}
                  letterSpacing={1}
                  fontWeight={600}
                >
                  Após o positivo ​existe o​ <strong>desconhecido</strong>.
                  Emoções diferentes e situações <strong>difíceis</strong>. Você
                  não precisa ​enfrentar tudo isso​ <strong>sozinha</strong>.
                </Typography>
                <Box>
                  <Button variant="contained" color="primary" size="large">
                    FALE COMIGO AGORA
                  </Button>
                </Box>
              </Stack>
            </Grid2>
            <Grid2
              size={{
                xs: 12,
                lg: 7,
              }}
              position={'relative'}
              minHeight={{
                xs: '380px',
                md: '1000px',
                lg: 'auto',
              }}
              sx={{
                backgroundImage: 'url(/oria.png)',
                backgroundPosition: 'top',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
              }}
            ></Grid2>
          </Grid2>
        </Stack>
      </MaxWidth>
      <Stack
        width={'100%'}
        height={'100%'}
        minHeight={{
          xs: '15vh',
        }}
        justifyContent={'center'}
        alignItems={'center'}
        bgcolor={'#001F3F'}
        marginTop={{
          md: 0,
        }}
        paddingX={2}
      >
        <Typography
          variant="h3"
          color="#fff"
          fontSize={{
            xs: 22,
            md: 42,
          }}
          fontWeight={700}
          textAlign={'center'}
        >
          Psicóloga para Mães - Psicólogas De Gestante - Psicóloga Online
        </Typography>
      </Stack>
    </Stack>
  );
};
