import { Stack } from '@mui/material';

import { PropsWithChildren } from 'react';

interface Props {
  delay?: number;
}

export const TextContainer = ({
  children,
  delay,
}: PropsWithChildren<Props>) => {
  return (
    <Stack
      className="animate-text"
      sx={{
        animationDelay: `${delay}s`,
      }}
    >
      {children}
    </Stack>
  );
};
