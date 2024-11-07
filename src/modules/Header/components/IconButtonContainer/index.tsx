'use client';
import { IconButton } from '@mui/material';
import { PropsWithChildren } from 'react';
import { useMobileDrawerState } from '../../store/useMobileDrawerState';
import { motion } from 'framer-motion';
import { useMainControl } from '../../store/useMainControl';

export const IconButtonContainer = ({ children }: PropsWithChildren) => {
  const { toggle } = useMobileDrawerState();
  const { mainControls } = useMainControl();
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      initial={'hidden'}
      animate={mainControls}
      transition={{ duration: 1, delay: 1, ease: 'easeInOut' }}
    >
      <IconButton onClick={toggle}>{children}</IconButton>
    </motion.div>
  );
};
