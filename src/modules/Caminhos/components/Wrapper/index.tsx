import { Stack } from '@mui/material';

import { PropsWithChildren } from 'react';

export const Wrapper = ({ children }: PropsWithChildren) => {
  return (
    <Stack
      pr={2}
      paddingX={{
        xs: 2,
      }}
      paddingTop={{
        xs: 4,
        md: 0,
      }}
      id="tratamentos"
    >
      {children}
    </Stack>
  );
};
