import { Stack } from '@mui/material';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  delay: number;
}

export const AccordionContainer = ({ children }: Props) => {
  return (
    <Stack
      sx={{
        '&:hover': {
          transition: 'background .5s',
        },
      }}
    >
      {children}
    </Stack>
  );
};
