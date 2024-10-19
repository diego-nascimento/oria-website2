'use client';

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid2,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { MaxWidth } from '@/shared/components/MaxWidth';

export const Caminhos = () => {
  const theme = useTheme();
  return (
    <Stack
      pr={2}
      paddingX={{
        xs: 2,
        md: 0,
      }}
      paddingTop={{
        xs: 4,
        md: 0,
      }}
      id="psicoterapia"
    >
      <MaxWidth>
        <Grid2 container spacing={4}>
          <Grid2
            size={{
              xs: 12,
              lg: 6,
            }}
            sx={{
              minHeight: 500,
              backgroundImage:
                'url(https://img.freepik.com/fotos-gratis/arte-digital-cao-bonito_23-2151150544.jpg?w=996&t=st=1728914404~exp=1728915004~hmac=a01769b4c5b78c0a6a0b7b2210bd3c7f6aad18d0f3761fe8e77713012b68d9c6)',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',

              [theme.breakpoints.up('md')]: {
                minHeight: 700,
              },
            }}
          ></Grid2>
          <Grid2
            size={{
              xs: 12,
              lg: 6,
            }}
            paddingBottom={4}
          >
            <Typography
              textTransform={'uppercase'}
              textAlign={'center'}
              fontSize={{
                xs: 28,
                md: 32,
              }}
              fontFamily={'Roboto Slab, serif'}
              fontWeight={600}
            >
              Seu tratamento na pratica
            </Typography>

            <Accordion
              sx={{
                '&:hover': {
                  transition: 'background .5s',
                },
                marginTop: 4,
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Stack paddingY={2}> Opcao 1</Stack>
              </AccordionSummary>
              <AccordionDetails>
                <AccordionDetails>
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/FHHoA_qUl8U?si=ZnaLshsS5clQtBNb"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </AccordionDetails>
              </AccordionDetails>
            </Accordion>
            <Accordion
              sx={{
                '&:hover': {
                  transition: 'background .5s',
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Stack paddingY={2}> Opcao 1</Stack>
              </AccordionSummary>
              <AccordionDetails>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/FHHoA_qUl8U?si=ZnaLshsS5clQtBNb"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </AccordionDetails>
            </Accordion>
          </Grid2>
        </Grid2>
      </MaxWidth>
    </Stack>
  );
};
