import { PropsWithChildren } from 'react';
import { Stack } from '@mui/material';

export const ButtonContainer = ({ children }: PropsWithChildren) => {
  return (
    <Stack
      alignItems={'center'}
      marginTop={{
        xs: 4,
        md: 8,
      }}
    >
      {children}
    </Stack>
  );
};
