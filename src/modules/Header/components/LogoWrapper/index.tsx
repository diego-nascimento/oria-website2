import { Stack } from '@mui/material';
import { PropsWithChildren } from 'react';

export const LogoWrapper = ({ children }: PropsWithChildren) => {
  return <Stack>{children}</Stack>;
};
