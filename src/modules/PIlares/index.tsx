import { MaxWidth } from '@/shared/components/MaxWidth';

import { Avatar, Box, Button, Grid2, Stack, Typography } from '@mui/material';

import Image from 'next/image';
import Link from 'next/link';

import { ImageContainer } from './components/ImageContainer';
import { TextContainer } from './components/TextContainer';
import { PhraseContainer } from './components/PhraseContainer';
import { ButtonContainer } from './components/ButtonContainer';

export const PIlares = () => {
  return (
    <Stack py={4} px={2} id="psicoterapia">
      <MaxWidth>
        <Stack>
          <Typography
            textTransform={'uppercase'}
            textAlign={'center'}
            fontSize={{
              xs: 32,
              md: 42,
            }}
            fontFamily={'Bree Serif, serif'}
            fontWeight={400}
          >
            Seu tratamento na pratica
          </Typography>
        </Stack>

        <Grid2 container spacing={4} marginTop={4} overflow={'hidden'}>
          <Grid2
            size={{
              xs: 12,
              lg: 6,
            }}
          >
            <ImageContainer>
              <Stack width={'100%'} maxWidth={750} justifyContent={'center'}>
                <Image
                  src={'/image.svg'}
                  width={1500}
                  height={1200}
                  alt="imagem"
                />
              </Stack>
            </ImageContainer>
          </Grid2>
          <Grid2
            size={{
              xs: 12,
              lg: 6,
            }}
          >
            <Stack alignItems={'center'} overflow={'hidden'}>
              <Stack width={'100%'} maxWidth={750} justifyContent={'center'}>
                <Stack gap={4} marginTop={4}>
                  <Stack
                    direction={{
                      xs: 'column',
                      md: 'row',
                    }}
                    alignItems={{
                      xs: 'center',
                      md: 'initial',
                    }}
                    gap={2}
                  >
                    <Box marginTop={1}>
                      <Avatar sx={{ backgroundColor: 'secondary.main' }}>
                        1
                      </Avatar>
                    </Box>

                    <Typography
                      fontSize={{
                        xs: 16,
                        md: 24,
                      }}
                    >
                      <Box component="strong" color={'#001f3f'}>
                        Identificação
                      </Box>{' '}
                      de questões que você vem ​enfrentando. Vamos juntas
                      compreender de ​forma mais ampla o que você vem
                      vivenciando.
                    </Typography>
                  </Stack>
                  <TextContainer delay={0.5}>
                    <Box marginTop={1}>
                      <Avatar sx={{ backgroundColor: 'secondary.main' }}>
                        2
                      </Avatar>
                    </Box>

                    <Typography
                      fontSize={{
                        xs: 16,
                        md: 24,
                      }}
                    >
                      Com diagnóstico definido é criado um protocolo ​individual
                      e personalizado ({' '}
                      <Box component="strong" color={'#001f3f'}>
                        plano de tratamento
                      </Box>{' '}
                      ) para tratar de forma​{' '}
                      <Box component="strong" color={'#001f3f'}>
                        personalizada
                      </Box>{' '}
                      o que te incomoda.
                    </Typography>
                  </TextContainer>
                  <TextContainer delay={0.6}>
                    <Box marginTop={1}>
                      <Avatar sx={{ backgroundColor: 'secondary.main' }}>
                        3
                      </Avatar>
                    </Box>

                    <Typography
                      fontSize={{
                        xs: 16,
                        md: 24,
                      }}
                    >
                      Durante as sessões, além do{' '}
                      <Box component="strong" color={'#001f3f'}>
                        acolhimento
                      </Box>{' '}
                      e uma​{' '}
                      <Box component="strong" color={'#001f3f'}>
                        escuta qualificada
                      </Box>{' '}
                      trabalhamos com técnicas ​eficazes da TCC (Terapias
                      Cognitivo ​Comportamentais).
                    </Typography>
                  </TextContainer>
                  <TextContainer delay={0.7}>
                    <Box marginTop={1}>
                      <Avatar sx={{ backgroundColor: 'secondary.main' }}>
                        4
                      </Avatar>
                    </Box>

                    <Typography
                      fontSize={{
                        xs: 16,
                        md: 24,
                      }}
                    >
                      Ao atingirmos os{' '}
                      <Box component="strong" color={'#001f3f'}>
                        objetivos terapêuticos
                      </Box>{' '}
                      que te ​trouxeram para o tratamento e mediante a ​melhora
                      do seu quadro, você já será capaz de ​utilizar as{' '}
                      <Box component="strong" color={'#001f3f'}>
                        habilidades
                      </Box>{' '}
                      e{' '}
                      <Box component="strong" color={'#001f3f'}>
                        ferramentas
                      </Box>{' '}
                      construídas ​em terapia.
                    </Typography>
                  </TextContainer>
                </Stack>
              </Stack>
            </Stack>
          </Grid2>
        </Grid2>
        <PhraseContainer>
          <Typography
            fontSize={{
              xs: 18,
              md: 36,
            }}
            fontWeight={700}
            marginTop={{
              xs: 4,
              lg: 8,
            }}
          >
            Você pode <strong>retomar as rédeas</strong> da sua{' '}
            <strong>vida</strong>. E eu ​posso te auxiliar nisso através de uma​{' '}
            <strong>abordagem validada cientificamente</strong>.
          </Typography>
        </PhraseContainer>

        <ButtonContainer>
          <Box
            id="whatsapp"
            component={Link}
            href="https://wa.me/message/WFTAHMJVVAHKI1"
            target="_blank"
          >
            <Button variant="contained" size="large">
              Fale comigo
            </Button>
          </Box>
        </ButtonContainer>
      </MaxWidth>
    </Stack>
  );
};
