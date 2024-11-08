import { Stack } from '@mui/material';

import { PropsWithChildren } from 'react';

export const TitleContainer = ({ children }: PropsWithChildren) => {
  return (
    <Stack
      marginBottom={2}
      alignItems={'center'}
      justifyContent={'center'}
      height={'100%'}
    >
      {children}
    </Stack>
  );
};
