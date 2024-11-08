import { PropsWithChildren } from 'react';
import { Stack } from '@mui/material';

export const ButtonContainer = ({ children }: PropsWithChildren) => {
  return <Stack alignItems={'center'}>{children}</Stack>;
};
