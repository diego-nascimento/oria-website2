import { Stack } from '@mui/material';

import { PropsWithChildren } from 'react';

export const Wrapper = ({ children }: PropsWithChildren) => {
  return (
    <Stack
      paddingY={{
        xs: 4,
        md: 14,
      }}
      paddingX={{
        xs: 2,
      }}
      bgcolor={'secondary.main'}
      display={{
        xs: 'none',
        lg: 'flex',
      }}
    >
      {children}
    </Stack>
  );
};
