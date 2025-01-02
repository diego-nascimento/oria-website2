import { Stack } from '@mui/material';
import { PropsWithChildren } from 'react';

export const MaxWidth = ({ children }: PropsWithChildren) => {
  return (
    <Stack width={'100%'} alignItems={'center'}>
      <Stack
        width={'100%'}
        maxWidth={{
          xs: '100%',
          md: '1440px',
          xl: '70%',
        }}
      >
        {children}
      </Stack>
    </Stack>
  );
};
