import { Stack } from '@mui/material';

import { PropsWithChildren } from 'react';

interface Props {
  index: number;
}

export const PerguntaContainer = ({ children }: PropsWithChildren<Props>) => {
  return <Stack sx={{ borderRadius: 8 }}>{children}</Stack>;
};
