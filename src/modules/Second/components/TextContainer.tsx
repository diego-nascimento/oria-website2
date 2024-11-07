'use client';
import { Stack } from '@mui/material';
import { useMainControlSecond } from '../store/useMainControlSecond';
import { motion } from 'framer-motion';
import { PropsWithChildren } from 'react';

interface Props {
  delay: number;
}

export const TextContainer = ({
  children,
  delay,
}: PropsWithChildren<Props>) => {
  const { mainControls } = useMainControlSecond();
  return (
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
        delay,
        ease: 'easeIn',
      }}
    >
      {children}
    </Stack>
  );
};
