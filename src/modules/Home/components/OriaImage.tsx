'use client';
import { Grid2 } from '@mui/material';
import { motion } from 'framer-motion';

export const OriaImage = () => {
  return (
    <Grid2
      component={motion.div}
      variants={{
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 },
      }}
      initial={'hidden'}
      animate={'visible'}
      transition={{
        duration: 0.5,
        delay: 1,
        ease: 'easeOut',
      }}
      size={{
        xs: 12,
        lg: 7,
      }}
      position={'relative'}
      minHeight={{
        xs: '380px',
        md: '1000px',
        lg: 'auto',
      }}
      sx={{
        backgroundImage: 'url(/ariane.png)',
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    />
  );
};