import { Stack } from '@mui/material';

import { PropsWithChildren } from 'react';

export const PhraseContainer = ({ children }: PropsWithChildren) => {
  return <Stack>{children}</Stack>;
};
