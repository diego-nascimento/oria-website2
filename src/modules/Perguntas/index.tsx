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

import { Wrapper } from './components/Wrapper';
import { TitleContainer } from './components/TitleContainer';
import { PerguntaContainer } from './components/PerguntaContainer';

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
  return (
    <MaxWidth>
      <Wrapper>
        <Grid2
          size={{
            xs: 12,
          }}
        >
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
              Dúvidas frequentes
            </Typography>
          </TitleContainer>
        </Grid2>
        <Grid2
          size={{
            xs: 12,
          }}
        >
          <Stack direction={'column'} gap={1}>
            {questions.map((qs, index) => {
              return (
                <PerguntaContainer key={qs.question} index={index}>
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
                </PerguntaContainer>
              );
            })}
          </Stack>
        </Grid2>
      </Wrapper>
    </MaxWidth>
  );
};
