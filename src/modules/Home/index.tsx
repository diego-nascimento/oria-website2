import { MaxWidth } from '@/shared/components/MaxWidth';
import { Box, Button, Grid2, Stack, Typography } from '@mui/material';

import Link from 'next/link';

import { TextContainer } from './components/TextContainer';
import { ButtonContainer } from './components/ButtonContainer';
import { OriaImage } from './components/OriaImage';
import { BannerContainer } from './components/BannerContainer';

export const Home = () => {
  return (
    <Stack alignItems={'center'} bgcolor={'secondary.main'} id="home">
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
                <TextContainer delay={0}>
                  <Typography
                    variant="h1"
                    textTransform={'uppercase'}
                    fontSize={{
                      xs: 14,
                      md: 16,
                    }}
                    fontWeight={600}
                    color="#fff"
                    letterSpacing={2}
                    component={'span'}
                  >
                    Psicologa de Mães Gestantes
                  </Typography>
                </TextContainer>

                <TextContainer delay={0.2}>
                  <Typography
                    variant="h1"
                    fontSize={{
                      xs: 28,
                      md: 50,
                    }}
                    letterSpacing={1}
                    fontWeight={600}
                    color="secondary.contrastText"
                    component={'p'}
                  >
                    Após o positivo ​existe o​ <strong>desconhecido</strong>.
                    Você não precisa ​enfrentar tudo isso​{' '}
                    <strong>sozinha</strong>.
                  </Typography>
                </TextContainer>
                <ButtonContainer>
                  <Stack
                    alignItems={{
                      xs: 'center',
                      md: 'flex-start',
                    }}
                    id="whatsapp"
                    component={Link}
                    href="https://wa.me/message/WFTAHMJVVAHKI1"
                    target="_blank"
                  >
                    <Box
                      display={{
                        xs: 'none',
                        md: 'block',
                      }}
                    >
                      <Button
                        variant="contained"
                        color="primary"
                        size={'medium'}
                      >
                        FALE COMIGO AGORA
                      </Button>
                    </Box>
                    <Box
                      display={{
                        xs: 'block',
                        md: 'none',
                      }}
                    >
                      <Button
                        variant="contained"
                        color="primary"
                        size={'large'}
                      >
                        FALE COMIGO AGORA
                      </Button>
                    </Box>
                  </Stack>
                </ButtonContainer>
              </Stack>
            </Grid2>
            <OriaImage />
          </Grid2>
        </Stack>
      </MaxWidth>
      <Stack
        width={'100%'}
        height={'100%'}
        justifyContent={'center'}
        alignItems={'center'}
        bgcolor={'#001F3F'}
        marginTop={{
          md: 0,
        }}
        paddingX={2}
        paddingY={{
          xs: 4,
          md: 8,
        }}
        sx={{
          boxShadow: 'rgba(0, 0, 0, 0.25) 0px -70px 55px',
          zIndex: 10,
        }}
      >
        <BannerContainer>
          <Typography
            variant="h3"
            color="#fff"
            fontSize={{
              xs: 15,
              md: 42,
            }}
            fontWeight={700}
            textAlign={'center'}
          >
            Psicóloga para Mães - Psicólogas De Gestante - Psicóloga Online
          </Typography>
        </BannerContainer>
      </Stack>
    </Stack>
  );
};
