'use client';
import { Grid2 } from '@mui/material';
import { useMainControlSecond } from '../store/useMainControlSecond';
import { motion } from 'framer-motion';
import { PropsWithChildren } from 'react';

interface Props {
  index: number;
}

export const ProblemContainer = ({
  children,
  index,
}: PropsWithChildren<Props>) => {
  const { mainControls } = useMainControlSecond();
  return (
    <Grid2
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
        bgcolor: 'secondary.main',
        borderRadius: 50,
        paddingY: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {children}
    </Grid2>
  );
};
