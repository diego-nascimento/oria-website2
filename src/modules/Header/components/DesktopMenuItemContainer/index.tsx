'use client';
import { motion } from 'framer-motion';
import { useMainControl } from '../../store/useMainControl';
import { PropsWithChildren } from 'react';

interface Props {
  index: number;
}

export const DesktopMenuItemContainer = ({
  index,
  children,
}: PropsWithChildren<Props>) => {
  const { mainControls } = useMainControl();
  return (
    <motion.div
      variants={{
        menuItemHidden: { opacity: 0, y: 10, scale: 0.99 },
        menuItemVisible: { opacity: 1, y: 0, scale: 1 },
      }}
      initial={'menuItemHidden'}
      animate={mainControls}
      transition={{
        duration: 0.5,
        delay: index * 0.25,
        ease: 'easeOut',
      }}
    >
      {children}
    </motion.div>
  );
};
