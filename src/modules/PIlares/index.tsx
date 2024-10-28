'use client';
import { MaxWidth } from '@/shared/components/MaxWidth';

import {
  Avatar,
  Box,
  Button,
  Grid2,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import { useAnimation, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export const PIlares = () => {
  const theme = useTheme();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView, mainControls]);

  return (
    <Stack py={4} px={2} id="psicoterapia" ref={ref}>
      <MaxWidth>
        <Stack
          component={motion.div}
          variants={{
            hidden: { opacity: 0, scale: 1.1 },
            visible: { opacity: 1, scale: 1 },
          }}
          initial={'hidden'}
          animate={mainControls}
          transition={{
            duration: 1,
            delay: 0.5,
            ease: 'easeIn',
          }}
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
            Seu tratamento na pratica
          </Typography>
        </Stack>

        <Grid2 container spacing={4} marginTop={4}>
          <Grid2
            size={{
              xs: 12,
              lg: 6,
            }}
          >
            <Stack
              alignItems={'center'}
              component={motion.div}
              variants={{
                hidden: { opacity: 0, x: -70, filter: 'blur(1rem)' },
                visible: { opacity: 1, x: 0, filter: 'blur(0rem)' },
              }}
              initial={'hidden'}
              animate={mainControls}
              transition={{
                duration: 1,
                delay: 0.3,
                ease: 'easeOut',
              }}
            >
              <Stack width={'100%'} maxWidth={750} justifyContent={'center'}>
                <Image
                  src={'/image.png'}
                  width={1500}
                  height={1200}
                  alt="imagem"
                />
              </Stack>
            </Stack>
          </Grid2>
          <Grid2
            size={{
              xs: 12,
              lg: 6,
            }}
          >
            <Stack alignItems={'center'}>
              <Stack width={'100%'} maxWidth={750} justifyContent={'center'}>
                <Stack gap={4} marginTop={4}>
                  <Stack
                    ref={ref}
                    component={motion.div}
                    variants={{
                      hidden: { opacity: 0, x: 70 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    initial={'hidden'}
                    animate={mainControls}
                    transition={{
                      duration: 1,
                      delay: 0.3,
                      ease: 'easeOut',
                    }}
                    direction={{
                      xs: 'column',
                      md: 'row',
                    }}
                    alignItems={{
                      xs: 'center',
                      md: 'initial',
                    }}
                    gap={2}
                  >
                    <Box marginTop={1}>
                      <Avatar
                        sx={{ backgroundColor: theme.palette.secondary.main }}
                      >
                        1
                      </Avatar>
                    </Box>

                    <Typography
                      fontSize={{
                        xs: 16,
                        md: 24,
                      }}
                    >
                      <Box component="strong" color={'#001f3f'}>
                        Identificação
                      </Box>{' '}
                      de questões que você vem ​enfrentando. Vamos juntas
                      compreender de ​forma mais ampla o que você vem
                      vivenciando.
                    </Typography>
                  </Stack>
                  <Stack
                    ref={ref}
                    component={motion.div}
                    variants={{
                      hidden: { opacity: 0, x: 70 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    initial={'hidden'}
                    animate={mainControls}
                    transition={{
                      duration: 1,
                      delay: 0.5,
                      ease: 'easeOut',
                    }}
                    direction={{
                      xs: 'column',
                      md: 'row',
                    }}
                    alignItems={{
                      xs: 'center',
                      md: 'initial',
                    }}
                    gap={2}
                  >
                    <Box marginTop={1}>
                      <Avatar
                        sx={{ backgroundColor: theme.palette.secondary.main }}
                      >
                        2
                      </Avatar>
                    </Box>

                    <Typography
                      fontSize={{
                        xs: 16,
                        md: 24,
                      }}
                    >
                      Com diagnóstico definido é criado um protocolo ​individual
                      e personalizado ({' '}
                      <Box component="strong" color={'#001f3f'}>
                        plano de tratamento
                      </Box>{' '}
                      ) para tratar de forma​{' '}
                      <Box component="strong" color={'#001f3f'}>
                        personalizada
                      </Box>{' '}
                      o que te incomoda.
                    </Typography>
                  </Stack>
                  <Stack
                    ref={ref}
                    component={motion.div}
                    variants={{
                      hidden: { opacity: 0, x: 70 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    initial={'hidden'}
                    animate={mainControls}
                    transition={{
                      duration: 1,
                      delay: 0.7,
                      ease: 'easeOut',
                    }}
                    direction={{
                      xs: 'column',
                      md: 'row',
                    }}
                    alignItems={{
                      xs: 'center',
                      md: 'initial',
                    }}
                    gap={2}
                  >
                    <Box marginTop={1}>
                      <Avatar
                        sx={{ backgroundColor: theme.palette.secondary.main }}
                      >
                        3
                      </Avatar>
                    </Box>

                    <Typography
                      fontSize={{
                        xs: 16,
                        md: 24,
                      }}
                    >
                      Durante as sessões, além do{' '}
                      <Box component="strong" color={'#001f3f'}>
                        acolhimento
                      </Box>{' '}
                      e uma​{' '}
                      <Box component="strong" color={'#001f3f'}>
                        escuta qualificada
                      </Box>{' '}
                      trabalhamos com técnicas ​eficazes da TCC (Terapias
                      Cognitivo ​Comportamentais).
                    </Typography>
                  </Stack>
                  <Stack
                    ref={ref}
                    component={motion.div}
                    variants={{
                      hidden: { opacity: 0, x: 70 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    initial={'hidden'}
                    animate={mainControls}
                    transition={{
                      duration: 1,
                      delay: 0.9,
                      ease: 'easeOut',
                    }}
                    direction={{
                      xs: 'column',
                      md: 'row',
                    }}
                    alignItems={{
                      xs: 'center',
                      md: 'initial',
                    }}
                    gap={2}
                  >
                    <Box marginTop={1}>
                      <Avatar
                        sx={{ backgroundColor: theme.palette.secondary.main }}
                      >
                        4
                      </Avatar>
                    </Box>

                    <Typography
                      fontSize={{
                        xs: 16,
                        md: 24,
                      }}
                    >
                      Ao atingirmos os{' '}
                      <Box component="strong" color={'#001f3f'}>
                        objetivos terapêuticos
                      </Box>{' '}
                      que te ​trouxeram para o tratamento e mediante a ​melhora
                      do seu quadro, você já será capaz de ​utilizar as{' '}
                      <Box component="strong" color={'#001f3f'}>
                        habilidades
                      </Box>{' '}
                      e{' '}
                      <Box component="strong" color={'#001f3f'}>
                        ferramentas
                      </Box>{' '}
                      construídas ​em terapia.
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </Grid2>
        </Grid2>
        <Stack
          ref={ref}
          component={motion.div}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          initial={'hidden'}
          animate={mainControls}
          transition={{
            duration: 1,
            delay: 0.8,
            ease: 'easeOut',
          }}
        >
          <Typography
            fontSize={{
              xs: 18,
              md: 36,
            }}
            fontWeight={700}
            marginTop={{
              xs: 4,
              lg: 8,
            }}
          >
            Você pode <strong>retomar as rédeas</strong> da sua{' '}
            <strong>vida</strong>. E eu ​posso te auxiliar nisso através de uma​{' '}
            <strong>abordagem validada cientificamente</strong>.
          </Typography>
        </Stack>

        <Stack
          alignItems={'center'}
          marginTop={4}
          component={motion.div}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
          initial={'hidden'}
          animate={mainControls}
          transition={{
            duration: 0.5,
            delay: 1,
            ease: 'easeOut',
          }}
        >
          <Box
            component={Link}
            href="https://wa.me/message/5MAMLEFBR547D1"
            target="_blank"
          >
            <Button variant="contained" size="large">
              Fale comigo
            </Button>
          </Box>
        </Stack>
      </MaxWidth>
    </Stack>
  );
};
