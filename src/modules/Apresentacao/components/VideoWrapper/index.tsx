'use client';

import { Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { PropsWithChildren } from 'react';
import { useMainControlApresentacao } from '../../store/useMainControlApresentacao';

export const VideoWrapper = ({ children }: PropsWithChildren) => {
  const { mainControls } = useMainControlApresentacao();
  return (
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
      bgcolor={'secondary.main'}
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
      {children}
    </Stack>
  );
};