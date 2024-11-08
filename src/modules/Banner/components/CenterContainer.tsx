import { Grid2 } from '@mui/material';

import { PropsWithChildren } from 'react';

export const CenterContainer = ({ children }: PropsWithChildren) => {
  return <Grid2 size={{ xs: 12, md: 4 }}>{children}</Grid2>;
};
