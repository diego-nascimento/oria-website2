import { MaxWidth } from '@/shared/components/MaxWidth';
import { Box, Button, CardContent, Stack, Typography } from '@mui/material';

import Link from 'next/link';

import { Wrapper } from './components/Wrapper';
import { TitleContainer } from './components/TitleContainer';
import { Card } from './components/Card';
import { ButtonContainer } from './components/ButtonContainer';

const avaliacoes = [
  {
    text: `"Amei desde a primeira sessão. No primeiro contato muita coisa já foi ​esclarecedora. Sempre quero colocar tudo em prática"`,
    person: 'V. G. G 24 anos',
  },
  {
    text: `"Está sendo ótima as sessões, me faz acreditar que sou capaz naquilo que ​eu quero, e no meio das dúvidas e incertezas eu lembro das nossas ​conversas e combinados, isso me dá mais forças e acreditar que sou ​capaz."`,
    person: 'I.S 28 anos',
  },
  {
    text: `"Desde a primeira sessão me senti muito confortável em falar com a Ariane, ​senti muita confiança nas atividades que ela propôs, estou vendo avanços ​no meu dia a dia ."`,
    person: 'J.C.M 37 anos',
  },
  {
    text: `"Comecei a me consultar com a Ariane em um dos momentos mais difíceis ​da minha vida mas graças a isso passei a enxergar esse momento como um ​"copo meio cheio" ao invés de "meio vazio".

", e além disso com o conhecimento dela sobre maternidade e parto me fez ​orientações além do trabalho dela, me deixando mais tranquila para fazer ​meu plano de parto. Uma profissional excelente e humana."`,
    person: 'A.L.C 24 anos',
  },
  {
    text: `"Estou feliz e confiante nesse processo terapêutico! Em pouco tempo ​muita coisa mudou! Sou grata a Ariane. É um instrumento poderoso para minha cura!"`,
    person: 'J.S 40 anos',
  },
];

export const Avaliacoes = () => {
  return (
    <Wrapper>
      <Stack
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'url(/mamae.webp)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.5,
          zIndex: 0,
        }}
      />
      <Stack zIndex={1}>
        <MaxWidth>
          <TitleContainer>
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
              Avaliações
            </Typography>
          </TitleContainer>

          <Stack
            gap={4}
            marginTop={{
              xs: 2,
              md: 4,
            }}
          >
            {avaliacoes.map((av, index) => {
              return (
                <Card key={av.text} index={index}>
                  <CardContent>
                    <Typography
                      fontSize={{
                        xs: 18,
                        md: 28,
                      }}
                    >
                      {av.text}

                      <Box component={'strong'} color={'#001f3f'}>
                        {av.person}
                      </Box>
                    </Typography>
                  </CardContent>
                </Card>
              );
            })}
          </Stack>
          <ButtonContainer>
            <Box
              component={Link}
              href="https://wa.me/message/WFTAHMJVVAHKI1"
              target="_blank"
              id="whatsapp"
            >
              <Button variant="contained">Começar agora</Button>
            </Box>
          </ButtonContainer>
        </MaxWidth>
      </Stack>
    </Wrapper>
  );
};
