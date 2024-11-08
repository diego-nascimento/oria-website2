import { Stack } from '@mui/material';

import { PropsWithChildren } from 'react';

export const TitleContainer = ({ children }: PropsWithChildren) => {
  return <Stack>{children}</Stack>;
};
