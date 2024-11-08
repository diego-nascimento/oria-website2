import { Stack } from '@mui/material';

import { PropsWithChildren } from 'react';

export const ButtonContainer = ({ children }: PropsWithChildren) => {
  return <Stack >{children}</Stack>;
};
