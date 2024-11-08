import { Stack } from '@mui/material';
import { PropsWithChildren } from 'react';

interface Props {
  delay?: number;
}

export const TextContainer = ({ children }: PropsWithChildren<Props>) => {
  return (
    <Stack
      gap={2}
      alignItems={{
        xs: 'center',
        md: 'initial',
      }}
      direction={{
        xs: 'column',
        md: 'row',
      }}
    >
      {children}
    </Stack>
  );
};
