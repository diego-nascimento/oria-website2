import { MaxWidth } from '@/shared/components/MaxWidth';

import { Box, Button, Grid2, Stack, Typography } from '@mui/material';

import Link from 'next/link';

import { Wrapper } from './components/Wrapper';
import { TextContainer } from './components/TextContainer';
import { ImageContainer } from './components/ImageContainer';
import { ProblemContainer } from './components/ProblemContainer';
import { ButtonContainer } from './components/ButtonContainer';
import Image from 'next/image';

const problemas = [
  'Ansiedade',
  'Medo',
  'Culpa',
  'Frustração',
  'Tristeza',
  'Solidão',
  'Raiva',
  'Insegurança',
];

export const Second = () => {
  return (
    <Stack id="emocoes">
      <MaxWidth>
        <Wrapper>
          <TextContainer delay={0}>
            <Typography
              fontSize={{
                xs: 20,

                md: 40,
              }}
              textAlign={'center'}
            >
              Existem <span style={{ fontWeight: 700 }}>mulheres</span> com a
              sorte de uma gestação de ​{' '}
              <span style={{ fontWeight: 700 }}>{`"script perfeito"`}</span> um
              parto dos sonhos e uma{' '}
              <Box component={'span'} color={'primary.main'}>
                maternidade de novela...
              </Box>
            </Typography>
          </TextContainer>
          <ImageContainer>
            <Box maxWidth={'300px'}>
              <Image
                width={300}
                height={300}
                src="/bebe.webp"
                alt="imagem do bebe"
              />
            </Box>
          </ImageContainer>
          <TextContainer delay={0.2}>
            <Typography
              fontSize={{
                xs: 20,
                md: 40,
              }}
              textAlign={'center'}
            >
              Mas como{' '}
              <Box
                component={'span'}
                color={'primary.main'}
                style={{ fontWeight: 700 }}
              >
                você
              </Box>
              , muitas{' '}
              <Box component={'span'} color={'primary.main'}>
                mulheres
              </Box>{' '}
              que atendo vivem ​algum desafio nessa{' '}
              <Box component={'span'} style={{ fontWeight: 700 }}>
                fase
              </Box>
              . Enfrentar tudo isso pode ​trazer algumas consequências:
            </Typography>
          </TextContainer>
          <Grid2
            container
            spacing={{
              xs: 1,
              md: 2,
            }}
          >
            {problemas.map((problema, index) => {
              return (
                <ProblemContainer key={problema} index={index}>
                  <Typography
                    fontSize={22}
                    textTransform={'capitalize'}
                    fontWeight={700}
                    color="#ffffff"
                  >
                    {problema}
                  </Typography>
                </ProblemContainer>
              );
            })}
          </Grid2>
          <TextContainer delay={0.5}>
            <Typography
              fontSize={{
                xs: 20,

                md: 40,
              }}
              textAlign={'center'}
            >
              Essa hoje é sua <strong>realidade</strong>? Tem te{' '}
              <strong>incomodado</strong>? Fique tranquila,{' '}
              <strong>eu sei</strong> como te <strong>ajudar</strong>.
            </Typography>
          </TextContainer>
          <ButtonContainer>
            <Box
              id="whatsapp"
              component={Link}
              href="https://wa.me/message/WFTAHMJVVAHKI1"
              target="_blank"
            >
              <Button variant="contained" size="large">
                Quero Ajuda
              </Button>
            </Box>
          </ButtonContainer>
        </Wrapper>
      </MaxWidth>
    </Stack>
  );
};
