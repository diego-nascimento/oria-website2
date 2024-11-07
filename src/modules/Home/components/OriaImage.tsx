'use client';
import { Grid2 } from '@mui/material';
import { motion } from 'framer-motion';

export const OriaImage = () => {
  return (
    <Grid2
      component={motion.div}
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
        backgroundImage: 'url(/ariane.webp)',
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    />
  );
};
