import { Stack } from '@mui/material';

import { PropsWithChildren } from 'react';

export const ButtonContainer = ({ children }: PropsWithChildren) => {
  return <Stack className="animateLeft">{children}</Stack>;
};
