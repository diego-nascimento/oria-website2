import { Stack } from '@mui/material';

import { PropsWithChildren } from 'react';

export const Wrapper = ({ children }: PropsWithChildren) => {
  return (
    <Stack paddingY={4} paddingX={2} id="sobre-mim">
      {children}
    </Stack>
  );
};
