'use client';

import { useInView } from 'react-intersection-observer';

export const Iframe = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  return (
    <iframe
      ref={ref}
      className={inView ? 'awaitAnimateOpacity' : 'animateOpacity'}
      style={{
        aspectRatio: '16/9',
      }}
      src="https://www.youtube.com/embed/DnltvwWUlHk?si=SdhcTIvqWbJdoNwV"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media;  "
    />
  );
};
