import { Grid2 } from '@mui/material';

export const OriaImage = () => {
  return (
    <Grid2
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
