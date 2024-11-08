import { Grid2 } from '@mui/material';

import { PropsWithChildren } from 'react';

export const OriaImageContainer = ({ children }: PropsWithChildren) => {
  return (
    <Grid2
      size={{
        xs: 12,
        sm: 6,
      }}
    >
      {children}
    </Grid2>
  );
};
