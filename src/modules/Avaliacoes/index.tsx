import { MaxWidth } from '@/shared/components/MaxWidth';
import {
  Box,
  Button,
  Card,
  CardContent,
  Stack,
  Typography,
} from '@mui/material';

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
    <Stack
      paddingY={4}
      position={'relative'}
      id="comentarios"
      paddingX={{
        xs: 2,
        md: 0,
      }}
    >
      <Stack
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'url(/mamae.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.5,
          zIndex: 0,
        }}
      />
      <Stack zIndex={1}>
        <MaxWidth>
          <Typography
            textTransform={'uppercase'}
            textAlign={'center'}
            fontSize={{
              xs: 32,
              md: 42,
            }}
            fontFamily={'Roboto Slab, serif'}
            fontWeight={600}
          >
            Avaliações
          </Typography>

          <Stack
            gap={4}
            marginTop={{
              xs: 4,
              md: 8,
            }}
          >
            {avaliacoes.map((av) => {
              return (
                <Card variant="elevation" elevation={0} key={av.text}>
                  <CardContent>
                    <Typography
                      fontSize={{
                        xs: 18,
                        md: 28,
                      }}
                    >
                      {av.text}
                      {'   '}
                      <Box component={'strong'} color={'#000'}>
                        {av.person}
                      </Box>
                    </Typography>
                  </CardContent>
                </Card>
              );
            })}
          </Stack>
          <Stack
            alignItems={'center'}
            marginTop={{
              xs: 4,
              md: 8,
            }}
          >
            <Button variant="contained">Começar agora</Button>
          </Stack>
        </MaxWidth>
      </Stack>
    </Stack>
  );
};
