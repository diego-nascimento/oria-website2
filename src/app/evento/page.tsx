'use client';

import { EventLanding } from '@/modules/EventLanding';
import { useSearchParams } from 'next/navigation';
import { notFound } from 'next/navigation';

export default function EventoPage() {
  const searchParams = useSearchParams();
  const teste = searchParams.get('teste');

  // Só exibe o EventLanding se o parâmetro teste=true for enviado
  if (teste === 'true') {
    return <EventLanding />;
  }

  // Caso contrário, redireciona para 404
  notFound();
}
