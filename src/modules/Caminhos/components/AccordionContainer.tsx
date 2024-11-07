'use client';
import { Stack } from '@mui/material';
import { ReactNode } from 'react';
import { useMainControlCaminhos } from '../store/useMainControlCaminhos';
import { motion } from 'framer-motion';

interface Props {
  children: ReactNode;
  delay: number;
}

export const AccordionContainer = ({ children, delay }: Props) => {
  const { mainControls } = useMainControlCaminhos();

  return (
    <Stack
      component={motion.div}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      initial={'hidden'}
      animate={mainControls}
      transition={{
        duration: 1,
        delay,
        ease: 'easeIn',
      }}
      sx={{
        '&:hover': {
          transition: 'background .5s',
        },
      }}
    >
      {children}
    </Stack>
  );
};
