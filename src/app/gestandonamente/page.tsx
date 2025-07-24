'use client';

import { ComingSoon } from '@/modules/ComingSoon';
import { EventLanding } from '@/modules/EventLanding';
import { useCountdown } from '@/shared/hooks';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function GestaoDeManutencaoContent() {
  const searchParams = useSearchParams();
  const teste = searchParams.get('teste');
  const targetDate = new Date('2025-08-17T00:00:00-03:00'); // Horário de São Paulo (UTC-3)
  const { timeLeft, isReleased } = useCountdown(targetDate);

  // Se o parâmetro teste=true for enviado, exibe o EventLanding
  if (teste === 'true') {
    return <EventLanding />;
  }

  // Caso contrário, segue a lógica normal de countdown
  if (!isReleased) {
    return <ComingSoon timeLeft={timeLeft} />;
  }

  return <EventLanding />;
}

export default function GestaoDeManutencao() {
  return (
    <Suspense>
      <GestaoDeManutencaoContent />
    </Suspense>
  );
}
