'use client';
import { MaxWidth } from '@/shared/components/MaxWidth';
import { Box, Button, Stack, Typography } from '@mui/material';
import Link from 'next/link';

import { Wrapper } from './components/Wrapper';
import { VideoWrapper } from './components/VideoWrapper';
import { Iframe } from './components/IFrame';

import { TextContainer } from './components/TextContainer';
import { ButtonContainer } from './components/ButtonContainer';

export const Apresentacao = () => {
  return (
    <Wrapper>
      <MaxWidth>
        <Stack borderRadius={8} alignItems={'center'}>
          <VideoWrapper>
            <Iframe />
          </VideoWrapper>
        </Stack>
        <TextContainer>
          <Typography
            marginTop={4}
            fontSize={{
              xs: 24,
              md: 52,
            }}
            textAlign={'center'}
            fontFamily={'Bree Serif, serif'}
            fontWeight={400}
            component={'h1'}
          >
            Ariane dos Santos Miranda - Psicóloga Obstétrica
          </Typography>
        </TextContainer>
        <TextContainer>
          <Typography
            color="primary"
            fontSize={{
              xs: 18,
              md: 32,
            }}
            textAlign={'center'}
            fontWeight={600}
            component={'h2'}
          >
            Registro Profissional: CRP04/67556
          </Typography>
        </TextContainer>
        <Stack marginTop={4} gap={4}>
          <TextContainer>
            <Typography
              fontSize={{
                xs: 18,
                md: 38,
              }}
              component={'p'}
            >
              Sou <Box component={'strong'}>psicóloga</Box> com foco em{' '}
              <Box component={'strong'}>perinatalidade</Box> e ​parentalidade,
              ou seja: Dedico o meu trabalho para ​auxiliar{' '}
              <strong>mães e famílias</strong> do planejamento familiar até
              ​questões com a criação dos filhos.
            </Typography>
          </TextContainer>
          <TextContainer>
            <Typography
              fontSize={{
                xs: 18,
                md: 38,
              }}
              component={'p'}
            >
              Eu sei o que é precisar de{' '}
              <Box component={'strong'}>apoio e acolhimento</Box> e não ​saber
              onde encontrar! É por isso que ao longo da minha ​carreira venho
              me atualizando e me{' '}
              <Box component={'strong'}>especializando​</Box> para{' '}
              <strong>ajudar você</strong>.
            </Typography>
          </TextContainer>
          <TextContainer>
            <Typography
              fontSize={{
                xs: 18,
                md: 38,
              }}
              component={'p'}
            >
              Para além da graduação em psicologia, sou{' '}
              <Box component={'strong'}>Pós-​graduada</Box> em Psicologia
              Perinatal e da Parentalidade, ​Pós-graduanda em{' '}
              <strong>Terapias Cognitivas-​Comportamentais (PUC Minas)</strong>{' '}
              e Pós-graduanda em <strong>Saúde Mental Perinatal (CECMP)</strong>
              .
            </Typography>
          </TextContainer>
        </Stack>
        <Stack
          alignItems={'center'}
          marginTop={{
            xs: 2,
            md: 8,
          }}
        >
          <ButtonContainer>
            <Box
              component={Link}
              href="https://wa.me/message/WFTAHMJVVAHKI1"
              target="_blank"
              id="whatsapp"
            >
              <Button variant="contained" size="large">
                Agendar agora
              </Button>
            </Box>
          </ButtonContainer>
        </Stack>
      </MaxWidth>
    </Wrapper>
  );
};
