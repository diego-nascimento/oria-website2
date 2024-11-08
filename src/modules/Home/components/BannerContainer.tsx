
import { PropsWithChildren } from 'react';

import { Stack } from '@mui/material';


export const BannerContainer = ({ children }: PropsWithChildren) => {

  return (
    <Stack >
      {children}
    </Stack>
  );
};
