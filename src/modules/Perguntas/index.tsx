'use client';

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid2,
  Stack,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const questions = [
  {
    question:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
  },
  {
    question:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ind',
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
  },
  {
    question:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ind',
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
  },
  {
    question:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
  },
  {
    question:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ',
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
  },
];

export const Questions = () => {
  return (
    <Grid2
      container
      marginY={4}
      paddingX={{
        xs: 2,
        lg: 10,
      }}
      justifyContent={'center'}
    >
      <Grid2
        size={{
          xs: 12,
        }}
      >
        <Stack
          marginBottom={2}
          alignItems={'center'}
          justifyContent={'center'}
          height={'100%'}
        >
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
            Alguma duvida?
          </Typography>
        </Stack>
      </Grid2>
      <Grid2
        size={{
          xs: 12,
          lg: 7,
        }}
      >
        <Stack direction={'column'} gap={1}>
          {questions.map((qs) => {
            return (
              <Stack
                key={qs.question}
                sx={{
                  borderRadius: 8,
                }}
              >
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
                    <Stack paddingY={2}> {qs.question}</Stack>
                  </AccordionSummary>
                  <AccordionDetails>{qs.answer}</AccordionDetails>
                </Accordion>
              </Stack>
            );
          })}
        </Stack>
      </Grid2>
    </Grid2>
  );
};
