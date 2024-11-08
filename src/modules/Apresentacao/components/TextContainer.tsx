'use client';
import { Stack } from '@mui/material';

import { PropsWithChildren, useLayoutEffect, useRef, useState } from 'react';

interface Props {
  delay?: number;
}

export const TextContainer = ({
  children,
  delay,
}: PropsWithChildren<Props>) => {
  const ref = useRef(null);

  const [isIntersecting, setIsIntersecting] = useState(false);

  useLayoutEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      setIsIntersecting(entries[0].isIntersecting);
    });

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [setIsIntersecting]);

  return (
    <Stack
      className={isIntersecting ? 'animate-text' : 'awaiting-animate-text'}
      ref={ref}
      sx={{ animationDelay: `${delay}s` }}
    >
      {children}
    </Stack>
  );
};
