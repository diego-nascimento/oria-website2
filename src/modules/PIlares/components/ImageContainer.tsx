import { Stack } from '@mui/material';
import { PropsWithChildren } from 'react';

export const ImageContainer = ({ children }: PropsWithChildren) => {
  return <Stack alignItems={'center'}>{children}</Stack>;
};
