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
import { MaxWidth } from '@/shared/components/MaxWidth';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

const questions = [
  {
    question: 'Horário de funcionamento?',
    answer:
      'Para residentes no Brasil meu horário de atendimento é de segunda a sexta-feira de 09:00 às 18:00h. Para brasileiros no exterior possuo alguns horário flexíveis. Confira comigo a disponibilidade de horários para agendamento',
  },
  {
    question: 'Qual a duração das sessões?',
    answer: 'As sessões tem duração entre 45 minutos e 1hora.',
  },
  {
    question: 'Quanto tempo dura o tratamento?',
    answer:
      'Durante as nossas primeiras sessões vamos entender o que precisamos olhar e tratar dentro da psicoterapia. Após alcançarmos essa meta, caso não exista mais nada a ser olhado, você recebe alta. O tempo de tratamento vai depender da sua demanda. ',
  },
  {
    question: 'Aceito plano de saúde?',
    answer:
      'Pra que eu consiga melhor atender você, hoje meus atendimentos são apenas particulares.',
  },
  {
    question: 'Qual valor da sessão?',
    answer:
      'Usar o preço das sessões em divulgações é vedado a mim pelo meu conselho ( CRP ). Entre em contato comigo pra se informar sobre esses detalhes.',
  },
  {
    question: 'As sessões online ou presencial tem diferença?',
    answer:
      'Você não tem nenhum prejuízo no ponto de vista de tratamento optando pelo modelo online ou presencial as técnicas são adaptáveis as duas situações.',
  },
  {
    question: 'A psicoterapia online é mesmo segura?',
    answer:
      'Toda sessão é mantida sob sigilo, a ética profissional se estende ao online. Todo psicólogo que atende pela internet é submetido a uma análise do conselho federal de psicologia pelo e-psi.',
  },
  {
    question: 'Por onde são feitas as chamadas?',
    answer:
      'Tenho preferência em atender via Google Meet, o que garante chamadas de vídeos seguras e criptografadas que são realizadas através de um link único e personalizado enviado a você antes da nossa sessão.',
  },
];

export const Questions = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView, mainControls]);
  return (
    <MaxWidth>
      <Grid2
        container
        marginY={4}
        paddingX={{
          xs: 2,
        }}
        justifyContent={'center'}
        id="duvidas"
        ref={ref}
      >
        <Grid2
          size={{
            xs: 12,
          }}
          component={motion.div}
          variants={{
            hidden: { opacity: 0, scale: 1.1 },
            visible: { opacity: 1, scale: 1 },
          }}
          initial={'hidden'}
          animate={mainControls}
          transition={{
            duration: 1,
            delay: 0,
            ease: 'easeIn',
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
              fontFamily={'Bree Serif, serif'}
              fontWeight={400}
            >
              Dúvidas frequentes
            </Typography>
          </Stack>
        </Grid2>
        <Grid2
          size={{
            xs: 12,
          }}
        >
          <Stack direction={'column'} gap={1}>
            {questions.map((qs, index) => {
              return (
                <Stack
                  key={qs.question}
                  sx={{
                    borderRadius: 8,
                  }}
                  component={motion.div}
                  variants={{
                    hidden: { opacity: 0, y: 40, filter: 'blur(1rem)' },
                    visible: { opacity: 1, y: 0, filter: 'blur(0rem)' },
                  }}
                  initial={'hidden'}
                  animate={mainControls}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: 'easeIn',
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
                      <Stack paddingY={2}>
                        <Typography fontWeight={600}>{qs.question}</Typography>
                      </Stack>
                    </AccordionSummary>
                    <AccordionDetails>{qs.answer}</AccordionDetails>
                  </Accordion>
                </Stack>
              );
            })}
          </Stack>
        </Grid2>
      </Grid2>
    </MaxWidth>
  );
};
