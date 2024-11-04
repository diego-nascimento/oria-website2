'use client';
import { MaxWidth } from '@/shared/components/MaxWidth';
import { Box, Button, Stack, Typography, useTheme } from '@mui/material';
import Link from 'next/link';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

export const Apresentacao = () => {
  const theme = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
      setTimeout(() => mainControls.start('menuItemVisible'), 1000);
    }
  }, [isInView, mainControls]);
  return (
    <Stack paddingY={4} paddingX={2} id="sobre-mim" ref={ref}>
      <MaxWidth>
        <Stack borderRadius={8} alignItems={'center'}>
          <Stack
            component={motion.div}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, scale: 1 },
            }}
            initial={'hidden'}
            animate={mainControls}
            transition={{
              duration: 0.5,
              delay: 0,
              ease: 'easeIn',
            }}
            bgcolor={theme.palette.secondary.main}
            width={'100%'}
            maxWidth={600}
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
            <motion.iframe
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              initial={'hidden'}
              animate={mainControls}
              transition={{
                duration: 1,
                delay: 0.25,
                ease: 'easeIn',
              }}
              style={{
                aspectRatio: '16/9',
              }}
              src="https://www.youtube.com/embed/DnltvwWUlHk?si=SdhcTIvqWbJdoNwV"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media;  "
            />
          </Stack>
        </Stack>
        <Stack
          component={motion.div}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, scale: 1 },
          }}
          initial={'hidden'}
          animate={mainControls}
          transition={{
            duration: 1,
            delay: 0.1,
            ease: 'easeIn',
          }}
        >
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
        </Stack>
        .
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial={'hidden'}
          animate={mainControls}
          transition={{
            duration: 1,
            delay: 0.3,
            ease: 'easeIn',
          }}
        >
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
        </motion.div>
        <Stack marginTop={4} gap={4}>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial={'hidden'}
            animate={mainControls}
            transition={{
              duration: 0.5,
              delay: 0.4,
              ease: 'easeIn',
            }}
          >
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
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial={'hidden'}
            animate={mainControls}
            transition={{
              duration: 0.5,
              delay: 0.5,
              ease: 'easeIn',
            }}
          >
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
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial={'hidden'}
            animate={mainControls}
            transition={{
              duration: 0.5,
              delay: 0.6,
              ease: 'easeIn',
            }}
          >
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
          </motion.div>
        </Stack>
        <Stack
          alignItems={'center'}
          marginTop={{
            xs: 2,
            md: 8,
          }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -100, scale: 0.99 },
              visible: { opacity: 1, x: 0, scale: 1 },
            }}
            initial={'hidden'}
            animate={mainControls}
            transition={{
              duration: 0.75,
              delay: 0.7,
              ease: 'easeOut',
            }}
          >
            <Box
              component={Link}
              href="https://wa.me/message/WFTAHMJVVAHKI1"
              target="_blank"
            >
              <Button variant="contained" size="large">
                Agendar agora
              </Button>
            </Box>
          </motion.div>
        </Stack>
      </MaxWidth>
    </Stack>
  );
};
