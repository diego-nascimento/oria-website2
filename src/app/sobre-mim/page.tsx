import { Footer } from '@/modules/Footer';

import { Header } from '@/modules/Header';

import { Third } from '@/modules/Apresentacao';
import { WhatsappButton } from '@/modules/WhatsappButton';

export default function HomePage() {
  return (
    <div>
      <Header />
      <WhatsappButton />
      <Third />
      <Footer />
    </div>
  );
}
