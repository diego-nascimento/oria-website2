import { Stack } from '@mui/material';

import { PropsWithChildren } from 'react';

export const Wrapper = ({ children }: PropsWithChildren) => {
  return (
    <Stack
      paddingY={4}
      position={'relative'}
      id="avaliacoes"
      paddingX={{
        xs: 2,
        md: 0,
      }}
    >
      {children}
    </Stack>
  );
};
