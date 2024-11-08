import { Stack } from '@mui/material';

import { PropsWithChildren } from 'react';

export const Wrapper = ({ children }: PropsWithChildren) => {
  return (
    <Stack
      flex={1}
      zIndex={1200}
      paddingY={{
        xs: 0,
        md: 1,
      }}
    >
      {children}
    </Stack>
  );
};
