'use client';
import { Stack } from '@mui/material';

import { PropsWithChildren, useEffect, useRef, useState } from 'react';

interface Props {
  delay?: number;
}

export const TextContainer = ({ children }: PropsWithChildren<Props>) => {
  const ref = useRef(null);

  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      setIsIntersecting(entries[0].isIntersecting);
    });

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [setIsIntersecting]);

  console.log(isIntersecting);

  return <Stack ref={ref}>{children}</Stack>;
};
