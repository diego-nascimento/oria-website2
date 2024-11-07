'use client';
import { Stack } from '@mui/material';
import { ReactNode } from 'react';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Props {
  children: ReactNode;
  delay: number;
}

export const AccordionContainer = ({ children, delay }: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <Stack
      component={motion.div}
      className={inView ? 'animate-text' : 'awaiting-animate-text'}
      ref={ref}
      sx={{
        animationDelay: `${delay}s`,
        '&:hover': {
          transition: 'background .5s',
        },
      }}
    >
      {children}
    </Stack>
  );
};
