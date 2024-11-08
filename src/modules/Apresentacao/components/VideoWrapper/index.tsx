import { Stack } from '@mui/material';

import { PropsWithChildren } from 'react';

export const VideoWrapper = ({ children }: PropsWithChildren) => {
  return (
    <Stack
      bgcolor={'secondary.main'}
      width={'100%'}
      maxWidth={600}
      paddingX={{
        xs: 2,
        md: 4,
      }}
      paddingY={{
        xs: 4,
        md: 2,
      }}
      borderRadius={8}
      gap={1}
    >
      {children}
    </Stack>
  );
};
