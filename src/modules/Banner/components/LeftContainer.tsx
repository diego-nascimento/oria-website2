import { Stack } from '@mui/material';

import { PropsWithChildren } from 'react';

export const LeftContainer = ({ children }: PropsWithChildren) => {
  return <Stack>{children}</Stack>;
};
