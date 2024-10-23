'use client';

import {
  Accordion,
  AccordionDetails,
  AccordionSummary as MuiAccordionSummary,
  Grid2,
  Stack,
  styled,
  Typography,
  useTheme,
} from '@mui/material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { MaxWidth } from '@/shared/components/MaxWidth';
import { useState } from 'react';
import { theme } from '@/style/theme';

const AccordionSummary = styled(MuiAccordionSummary)({
  fontWeight: 700,
  color: theme.palette.secondary.main,
});

export const Caminhos = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

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
      id="tratamentos"
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
              backgroundImage: 'url(/ariane2.jpg)',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',

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
            marginTop={4}
          >
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
            >
              Como posso te ajudar?
            </Typography>

            <Accordion
              sx={{
                '&:hover': {
                  transition: 'background .5s',
                },
                marginTop: 4,
              }}
              expanded={expanded === 'panel1'}
              onChange={handleChange('panel1')}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Stack paddingY={2}>Gestantes</Stack>
              </AccordionSummary>

              <AccordionDetails>
                <Stack
                  component={'iframe'}
                  sx={{
                    width: '100%',
                    height: 350,

                    [theme.breakpoints.down('lg')]: {
                      height: 500,
                    },

                    [theme.breakpoints.down('sm')]: {
                      height: 210,
                    },
                  }}
                  src="https://www.youtube.com/embed/FHHoA_qUl8U?si=ZnaLshsS5clQtBNb"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </AccordionDetails>
            </Accordion>
            <Accordion
              sx={{
                '&:hover': {
                  transition: 'background .5s',
                },
              }}
              expanded={expanded === 'panel2'}
              onChange={handleChange('panel2')}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Stack paddingY={2}>Luto gestacional/perinatal</Stack>
              </AccordionSummary>
              <AccordionDetails>
                <Stack
                  component={'iframe'}
                  sx={{
                    width: '100%',
                    height: 350,

                    [theme.breakpoints.down('lg')]: {
                      height: 500,
                    },

                    [theme.breakpoints.down('sm')]: {
                      height: 210,
                    },
                  }}
                  src="https://www.youtube.com/embed/FHHoA_qUl8U?si=ZnaLshsS5clQtBNb"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </AccordionDetails>
            </Accordion>
            <Accordion
              sx={{
                '&:hover': {
                  transition: 'background .5s',
                },
              }}
              expanded={expanded === 'panel3'}
              onChange={handleChange('panel3')}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Stack paddingY={2}>
                  Gestação de alto risco / diagnostico difícil
                </Stack>
              </AccordionSummary>
              <AccordionDetails>
                <Stack
                  component={'iframe'}
                  sx={{
                    width: '100%',
                    height: 350,

                    [theme.breakpoints.down('lg')]: {
                      height: 500,
                    },

                    [theme.breakpoints.down('sm')]: {
                      height: 210,
                    },
                  }}
                  src="https://www.youtube.com/embed/FHHoA_qUl8U?si=ZnaLshsS5clQtBNb"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </AccordionDetails>
            </Accordion>
            <Accordion
              sx={{
                '&:hover': {
                  transition: 'background .5s',
                },
              }}
              expanded={expanded === 'panel4'}
              onChange={handleChange('panel4')}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Stack paddingY={2}>Pós-parto / Puerpério</Stack>
              </AccordionSummary>
              <AccordionDetails>
                <Stack
                  component={'iframe'}
                  sx={{
                    width: '100%',
                    height: 350,

                    [theme.breakpoints.down('lg')]: {
                      height: 500,
                    },

                    [theme.breakpoints.down('sm')]: {
                      height: 210,
                    },
                  }}
                  src="https://www.youtube.com/embed/4b2_X3_beuo?si=n8h-BjdFtXdIkbTg"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </AccordionDetails>
            </Accordion>
          </Grid2>
        </Grid2>
      </MaxWidth>
    </Stack>
  );
};
