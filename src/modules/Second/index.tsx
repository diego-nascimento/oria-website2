'use client';
import { MaxWidth } from '@/shared/components/MaxWidth';

import { Box, Button, Grid2, Stack, Typography, useTheme } from '@mui/material';
import { AssetImage } from './assets/assetImage';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { useAnimation, useInView } from 'framer-motion';
import { motion } from 'framer-motion';

const problemas = [
  'Ansiedade',
  'Medo',
  'Culpa',
  'Frustração',
  'Tristeza',
  'Solidão',
  'Raiva',
  'Insegurança',
];

export const Second = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView, mainControls]);

  const theme = useTheme();

  return (
    <Stack id="emocoes">
      <MaxWidth>
        <Stack paddingX={2} paddingY={4} gap={4} ref={ref}>
          <Stack
            component={motion.div}
            variants={{
              hidden: { opacity: 0, y: 40, filter: 'blur(1rem)' },
              visible: { opacity: 1, y: 0, filter: 'blur(0rem)' },
            }}
            initial={'hidden'}
            animate={mainControls}
            transition={{
              duration: 1,
              delay: 0,
              ease: 'easeIn',
            }}
          >
            <Typography
              fontSize={{
                xs: 20,

                md: 40,
              }}
              textAlign={'center'}
            >
              Existem <span style={{ fontWeight: 700 }}>mulheres</span> com a
              sorte de uma gestação de ​{' '}
              <span style={{ fontWeight: 700 }}>{`"script perfeito"`}</span> um
              parto dos sonhos e uma{' '}
              <span
                style={{
                  color: theme.palette.primary.main,
                }}
              >
                maternidade de novela...
              </span>
            </Typography>
          </Stack>
          <Stack
            component={motion.div}
            variants={{
              hidden: { opacity: 0, y: 40, filter: 'blur(1rem)' },
              visible: { opacity: 1, y: 0, scale: 1, filter: 'blur(0rem)' },
            }}
            initial={'hidden'}
            animate={mainControls}
            transition={{
              duration: 1,
              delay: 0.1,
              ease: 'easeIn',
            }}
            position={'relative'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Box position={'absolute'} maxWidth={'300px'}>
              <img src="/bebe.png" />
            </Box>
            <Box width={'100%'} maxWidth={'330px'}>
              <AssetImage />
            </Box>
          </Stack>
          <Stack
            component={motion.div}
            variants={{
              hidden: { opacity: 0, y: 40, filter: 'blur(1rem)' },
              visible: { opacity: 1, y: 0, filter: 'blur(0rem)' },
            }}
            initial={'hidden'}
            animate={mainControls}
            transition={{
              duration: 1,
              delay: 0.2,
              ease: 'easeIn',
            }}
          >
            <Typography
              fontSize={{
                xs: 20,
                md: 40,
              }}
              textAlign={'center'}
            >
              Mas como <span style={{ fontWeight: 700 }}>você</span>, muitas{' '}
              <span
                style={{
                  color: theme.palette.primary.main,
                }}
              >
                mulheres
              </span>{' '}
              que atendo vivem ​algum desafio nessa{' '}
              <span style={{ fontWeight: 700 }}>fase</span>. Enfrentar tudo isso
              pode ​trazer algumas consequências:
            </Typography>
          </Stack>
          <Grid2
            container
            spacing={{
              xs: 1,
              md: 2,
            }}
          >
            {problemas.map((problema, index) => {
              return (
                <Grid2
                  key={problema}
                  component={motion.div}
                  variants={{
                    hidden: { opacity: 0, y: 40, filter: 'blur(1rem)' },
                    visible: { opacity: 1, y: 0, filter: 'blur(0rem)' },
                  }}
                  initial={'hidden'}
                  animate={mainControls}
                  transition={{
                    duration: 0.5,
                    delay: 0.3 + index * 0.1,
                    ease: 'easeIn',
                  }}
                  size={{
                    xs: 6,
                    md: 3,
                  }}
                  sx={{
                    bgcolor: theme.palette.secondary.main,
                    borderRadius: 50,
                    paddingY: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Typography
                    fontSize={22}
                    textTransform={'capitalize'}
                    fontWeight={700}
                    color="#ffffff"
                  >
                    {problema}
                  </Typography>
                </Grid2>
              );
            })}
          </Grid2>
          <Stack
            component={motion.div}
            variants={{
              hidden: { opacity: 0, y: 40, filter: 'blur(1rem)' },
              visible: { opacity: 1, y: 0, filter: 'blur(0rem)' },
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
              fontSize={{
                xs: 20,

                md: 40,
              }}
              textAlign={'center'}
            >
              Essa hoje é sua <strong>realidade</strong>? Tem te{' '}
              <strong>incomodado</strong>? Fique tranquila,{' '}
              <strong>eu sei</strong> como te <strong>ajudar</strong>.
            </Typography>
          </Stack>
          <Stack
            alignItems={'center'}
            component={motion.div}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
            initial={'hidden'}
            animate={mainControls}
            transition={{
              duration: 0.5,
              delay: 0.6,
              ease: 'easeOut',
            }}
          >
            <Box
              component={Link}
              href="https://wa.me/message/WFTAHMJVVAHKI1"
              target="_blank"
            >
              <Button variant="contained" size="large">
                Quero Ajuda
              </Button>
            </Box>
          </Stack>
        </Stack>
      </MaxWidth>
    </Stack>
  );
};
