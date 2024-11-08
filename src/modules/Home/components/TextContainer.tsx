import { Stack } from '@mui/material';

import { PropsWithChildren } from 'react';

interface Props {
  delay?: number;
}

export const TextContainer = ({
  children

}: PropsWithChildren<Props>) => {
  return (
    <Stack
     
    >
      {children}
    </Stack>
  );
};
