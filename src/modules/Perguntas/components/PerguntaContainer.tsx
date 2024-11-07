'use client';
import { Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { PropsWithChildren } from 'react';

import { useMainControlPerguntas } from '../store/useMainControlPerguntas';

interface Props {
  index: number;
}

export const PerguntaContainer = ({
  children,
  index,
}: PropsWithChildren<Props>) => {
  const { mainControls } = useMainControlPerguntas();
  return (
    <Stack
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
      {children}
    </Stack>
  );
};
