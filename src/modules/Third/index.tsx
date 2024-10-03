'use client';
import { MaxWidth } from '@/shared/components/MaxWidth';
import { Box, Button, Stack, Typography, useTheme } from '@mui/material';

export const Third = () => {
  const theme = useTheme();
  return (
    <Stack bgcolor={theme.palette.secondary.main} paddingY={4} paddingX={2}>
      <MaxWidth>
        <Stack borderRadius={8} alignItems={'center'}>
          <Stack
            bgcolor={theme.palette.background.default}
            width={'100%'}
            maxWidth={900}
            paddingX={{
              xs: 2,
              md: 4,
            }}
            paddingY={{
              xs: 4,
              md: 2,
            }}
            borderRadius={8}
            gap={1}
          >
            <Typography
              fontSize={{
                xs: 18,
                md: 36,
              }}
              color="primary"
              textAlign={'center'}
              fontWeight={700}
            >
              Ariane Miranda, poe um titulo aqui
            </Typography>
            <iframe
              style={{
                aspectRatio: '16/9',
              }}
              src="https://www.youtube.com/embed/DnltvwWUlHk?si=SdhcTIvqWbJdoNwV"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media;  "
            />
          </Stack>
        </Stack>

        <Typography
          marginTop={4}
          fontSize={{
            xs: 24,
            md: 52,
          }}
          textAlign={'center'}
          fontWeight={700}
        >
          Ariane dos Santos Miranda - Psicóloga ​de Mães e gestantes
        </Typography>
        <Typography
          color="primary"
          fontSize={{
            xs: 18,
            md: 35,
          }}
          textAlign={'center'}
          fontWeight={600}
        >
          Registro Profissional: CRP04/67556
        </Typography>
        <Stack marginTop={4} gap={4}>
          <Typography
            fontSize={{
              xs: 18,
              md: 38,
            }}
          >
            Sou{' '}
            <Box component={'strong'} color={'#000'}>
              psicóloga
            </Box>{' '}
            com foco em{' '}
            <Box component={'strong'} color={'#000'}>
              perinatalidade
            </Box>{' '}
            e ​parentalidade, ou seja: Dedico o meu trabalho para ​auxiliar{' '}
            <strong>mães e famílias</strong> do planejamento familiar até
            ​questões com a criação dos filhos.
          </Typography>

          <Typography
            fontSize={{
              xs: 18,
              md: 38,
            }}
          >
            Eu sei o que é precisar de{' '}
            <Box component={'strong'} color={'#000'}>
              apoio e acolhimento
            </Box>{' '}
            e não ​saber onde encontrar! É por isso que ao longo da minha
            ​carreira venho me atualizando e me{' '}
            <Box component={'strong'} color={'#000'}>
              especializando​
            </Box>{' '}
            para <strong>ajudar você</strong>.
          </Typography>
          <Typography
            fontSize={{
              xs: 18,
              md: 38,
            }}
          >
            Para além da graduação em psicologia, sou{' '}
            <Box component={'strong'} color={'#000'}>
              Pós-​graduada
            </Box>{' '}
            em Psicologia Perinatal e da Parentalidade e ​Pós-graduanda em{' '}
            <strong>Terapias Cognitivas-​Comportamentais</strong>.
          </Typography>
        </Stack>
        <Stack
          alignItems={'center'}
          marginTop={{
            xs: 2,
            md: 8,
          }}
        >
          <Box>
            <Button variant="contained" size="large">
              Agendar agora
            </Button>
          </Box>
        </Stack>
      </MaxWidth>
    </Stack>
  );
};
