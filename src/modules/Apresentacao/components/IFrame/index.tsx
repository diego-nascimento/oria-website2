'use client';
import { motion } from 'framer-motion';
import { useMainControlApresentacao } from '../../store/useMainControlApresentacao';

export const Iframe = () => {
  const { mainControls } = useMainControlApresentacao();
  return (
    <motion.iframe
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      initial={'hidden'}
      animate={mainControls}
      transition={{
        duration: 1,
        delay: 0.25,
        ease: 'easeIn',
      }}
      style={{
        aspectRatio: '16/9',
      }}
      src="https://www.youtube.com/embed/DnltvwWUlHk?si=SdhcTIvqWbJdoNwV"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media;  "
    />
  );
};
