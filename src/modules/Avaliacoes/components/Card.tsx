import { Card as MuiCard } from '@mui/material';

import { PropsWithChildren } from 'react';

interface Props {
  index: number;
}

export const Card = ({ children, index }: PropsWithChildren<Props>) => {
  return (
    <MuiCard
      variant="elevation"
      elevation={0}
      sx={{ animationDelay: `${index * 0.1}s` }}
    >
      {children}
    </MuiCard>
  );
};
