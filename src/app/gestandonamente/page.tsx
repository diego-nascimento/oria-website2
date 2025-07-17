'use client';

import { ComingSoon } from '@/modules/ComingSoon';
import { EventLanding } from '@/modules/EventLanding';
import { useCountdown } from '@/shared/hooks';

export default function GestaoDeManutencao() {
  const targetDate = new Date('2025-08-17T00:00:00-03:00'); // Horário de São Paulo (UTC-3)
  const { timeLeft, isReleased } = useCountdown(targetDate);

  if (!isReleased) {
    return <ComingSoon timeLeft={timeLeft} />;
  }

  return <EventLanding />;
}
