import { Grid2, Stack, Typography } from '@mui/material';

import { MaxWidth } from '@/shared/components/MaxWidth';

import { Wrapper } from './components/Wrapper';
import { OriaImageContainer } from './components/OriaImageContainer';
import { TitleContainer } from './components/TitleContainer';
import { AccordionContainer } from './components/AccordionContainer';
import { Accordion } from './components/Accordion';

export const Caminhos = () => {
  return (
    <Wrapper>
      <MaxWidth>
        <Grid2
          container
          spacing={4}
          marginTop={2}
          sx={{
            overflowX: 'hidden',
          }}
        >
          <OriaImageContainer>
            <Stack
              width={'100%'}
              minHeight={{
                xs: 500,
                md: 700,
              }}
              sx={{
                backgroundImage: 'url(/ariane2.png)',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                borderRadius: 80,
              }}
            />
          </OriaImageContainer>
          <Grid2
            size={{
              xs: 12,
              sm: 6,
            }}
            paddingBottom={4}
            marginTop={4}
          >
            <TitleContainer>
              <Typography
                textTransform={'uppercase'}
                textAlign={'center'}
                fontSize={{
                  xs: 28,
                  md: 32,
                }}
                fontFamily={'Bree Serif, serif'}
                fontWeight={400}
                color="secondary.main"
                component={'h1'}
              >
                Como posso te ajudar?
              </Typography>
            </TitleContainer>
            <AccordionContainer delay={0}>
              <Accordion panel="panel1" summary="Gestantes">
                <Stack
                  component={'iframe'}
                  height={{
                    xs: 210,
                    lg: 500,
                  }}
                  sx={{
                    width: '100%',
                  }}
                  src="https://www.youtube.com/embed/FHHoA_qUl8U?si=d_WptaeCh84reGbs"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </Accordion>
            </AccordionContainer>
            <AccordionContainer delay={0.1}>
              <Accordion panel="panel2" summary="Luto Gestacional">
                <Stack
                  component={'iframe'}
                  height={{
                    xs: 210,
                    lg: 500,
                  }}
                  sx={{
                    width: '100%',
                  }}
                  src="https://www.youtube.com/embed/A1wJz0kY63w?si=e3ZVnRoM1hjNipVg"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </Accordion>
            </AccordionContainer>
            <AccordionContainer delay={0.2}>
              <Accordion
                panel="panel3"
                summary="Gestação de alto risco / diagnostico difícil"
              >
                <Stack
                  component={'iframe'}
                  height={{
                    xs: 210,
                    lg: 500,
                  }}
                  sx={{
                    width: '100%',
                    height: 350,
                  }}
                  src="https://www.youtube.com/embed/u45L-MCKyXw?si=nzXxjUM4iJWPta6X"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </Accordion>
            </AccordionContainer>
            <AccordionContainer delay={0.3}>
              <Accordion panel="panel4" summary="Pós-parto / Puerpério">
                <Stack
                  component={'iframe'}
                  height={{
                    xs: 210,
                    lg: 500,
                  }}
                  sx={{
                    width: '100%',
                  }}
                  src="https://www.youtube.com/embed/4jyDo2-HCMc?si=-xDqdUEwETi0IgnN"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </Accordion>
            </AccordionContainer>
            <AccordionContainer delay={0.4}>
              <Accordion panel="panel5" summary="Processo de adoção">
                <Stack
                  component={'iframe'}
                  height={{
                    xs: 210,
                    lg: 500,
                  }}
                  sx={{
                    width: '100%',
                  }}
                  src="https://www.youtube.com/embed/4b2_X3_beuo?si=75zpJsB_vZmKxGiH"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </Accordion>
            </AccordionContainer>
          </Grid2>
        </Grid2>
      </MaxWidth>
    </Wrapper>
  );
};
