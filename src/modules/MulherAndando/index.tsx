'use client';

import { Box, Stack, Typography, useTheme } from '@mui/material';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

export const MulherAndando = () => {
  const theme = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView, mainControls]);
  return (
    <Stack
      overflow={'hidden'}
      height={{
        xs: '100%',
        lg: '60vh',
      }}
      paddingY={{
        xs: 14,
        lg: 0,
      }}
      position={'relative'}
      justifyContent={'center'}
      alignItems={'center'}
      paddingX={2}
    >
      <Stack
        ref={ref}
        component={motion.div}
        variants={{
          hidden: { opacity: 0, x: 40, filter: 'blur(1rem)' },
          visible: { opacity: 1, x: 0, filter: 'blur(0rem)' },
        }}
        initial={'hidden'}
        animate={mainControls}
        transition={{
          duration: 1,
          delay: 0.3,
          ease: 'easeOut',
        }}
        zIndex={20}
        bgcolor={theme.palette.background.default}
        borderRadius={4}
        marginLeft={{
          xs: 0,
          lg: 80,
        }}
        padding={4}
        maxWidth={{
          xs: '100%',
          lg: '35vw',
        }}
      >
        <Typography
          fontSize={{
            xs: 20,
            lg: 32,
          }}
          textAlign={'right'}
        >
          Mesmo que você{' '}
          <Box component={'strong'} color={'#001f3f'}>
            acredite
          </Box>{' '}
          que não ​existe{' '}
          <Box component={'strong'} color={'#001f3f'}>
            saída
          </Box>
          , saiba que é{' '}
          <Box component={'strong'} color={'#001f3f'}>
            possível​ construir
          </Box>{' '}
          uma realidade mais​{' '}
          <Box component={'strong'} color={'#001f3f'}>
            funcional
          </Box>{' '}
          e com mais <strong>qualidade ​de vida</strong>.
        </Typography>
      </Stack>
      <Stack position={'absolute'}>
        <video autoPlay loop muted style={{ minWidth: '100vw' }}>
          <source src={'videomuie.mp4'} type="video/mp4" />
        </video>
      </Stack>
    </Stack>
  );
};
