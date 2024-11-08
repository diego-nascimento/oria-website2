import { Grid2 } from '@mui/material';

import { PropsWithChildren } from 'react';

interface Props {
  index: number;
}

export const ProblemContainer = ({
  children,
  index,
}: PropsWithChildren<Props>) => {
  return (
    <Grid2
      size={{
        xs: 6,
        md: 3,
      }}
      sx={{
        bgcolor: 'secondary.main',
        borderRadius: 50,
        paddingY: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        animationDelay: `${0.3 + index * 0.1}s`,
      }}
    >
      {children}
    </Grid2>
  );
};
