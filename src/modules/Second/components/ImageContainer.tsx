import { Stack } from '@mui/material';

import { PropsWithChildren } from 'react';

interface Props {
  delay?: number;
}

export const ImageContainer = ({ children }: PropsWithChildren<Props>) => {
  return (
    <Stack
      position={'relative'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      {children}
    </Stack>
  );
};
