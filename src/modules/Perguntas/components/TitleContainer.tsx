'use client';
import { Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { PropsWithChildren } from 'react';

import { useMainControlPerguntas } from '../store/useMainControlPerguntas';

export const TitleContainer = ({ children }: PropsWithChildren) => {
  const { mainControls } = useMainControlPerguntas();
  return (
    <Stack
      marginBottom={2}
      alignItems={'center'}
      justifyContent={'center'}
      height={'100%'}
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
      {children}
    </Stack>
  );
};
