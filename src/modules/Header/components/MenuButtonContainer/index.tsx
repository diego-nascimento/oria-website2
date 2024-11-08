import { Stack } from '@mui/material';
import { PropsWithChildren } from 'react';

export const MenuButtonContainer = ({ children }: PropsWithChildren) => {
  return <Stack>{children}</Stack>;
};
