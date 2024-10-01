import { Stack } from '@mui/material';
import { PropsWithChildren } from 'react';

export const MaxWidth = ({ children }: PropsWithChildren) => {
  return (
    <Stack width={'100%'} alignItems={'center'}>
      <Stack width={'100%'} maxWidth={'1440px'}>
        {children}
      </Stack>
    </Stack>
  );
};
