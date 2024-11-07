'use client';
import { ListItem } from '@mui/material';
import { PropsWithChildren } from 'react';
import { useMobileDrawerState } from '../../store/useMobileDrawerState';
import Link from 'next/link';

interface Props {
  url: string;
}

export const ListItemContainer = ({
  children,
  url,
}: PropsWithChildren<Props>) => {
  const { toggle } = useMobileDrawerState();
  return (
    <ListItem disablePadding onClick={toggle} component={Link} href={url}>
      {children}
    </ListItem>
  );
};
