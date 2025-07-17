'use client';

import { EventLanding } from '@/modules/EventLanding';
import { useSearchParams } from 'next/navigation';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

function EventoContent() {
  const searchParams = useSearchParams();
  const teste = searchParams.get('teste');

  // Só exibe o EventLanding se o parâmetro teste=true for enviado
  if (teste === 'true') {
    return <EventLanding />;
  }

  // Caso contrário, redireciona para 404
  notFound();
}

export default function EventoPage() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <EventoContent />
    </Suspense>
  );
}
