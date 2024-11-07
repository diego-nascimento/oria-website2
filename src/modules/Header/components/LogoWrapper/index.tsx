'use client';
import { PropsWithChildren } from 'react';
import { motion } from 'framer-motion';

export const LogoWrapper = ({ children }: PropsWithChildren) => {
  return <motion.div>{children}</motion.div>;
};
