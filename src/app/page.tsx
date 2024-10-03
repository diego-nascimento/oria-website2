import { Avaliacoes } from '@/modules/Avaliacoes';
import { Banner } from '@/modules/Banner';
import { Fifty } from '@/modules/Fifty';
import { Footer } from '@/modules/Footer';
import { Forty } from '@/modules/Forty';
import { Header } from '@/modules/Header';
import { Home } from '@/modules/Home';
import { Second } from '@/modules/Second';
import { Third } from '@/modules/Third';
import { WhatsappButton } from '@/modules/WhatsappButton';

export default function HomePage() {
  return (
    <div>
      <Header />
      <WhatsappButton />
      <Home />
      <Second />
      <Third />
      <Banner />
      <Forty />
      <Fifty />
      <Avaliacoes />
      <Footer />
    </div>
  );
}
