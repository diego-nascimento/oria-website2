import { Avaliacoes } from '@/modules/Avaliacoes';
import { Banner } from '@/modules/Banner';
import { PIlares } from '@/modules/PIlares';
import { Footer } from '@/modules/Footer';
import { MulherAndando } from '@/modules/MulherAndando';
import { Header } from '@/modules/Header';
import { Home } from '@/modules/Home';
import { Questions } from '@/modules/Perguntas';
import { Second } from '@/modules/Second';
import { Apresentacao } from '@/modules/Apresentacao';
import { WhatsappButton } from '@/modules/WhatsappButton';
import { Caminhos } from '@/modules/Caminhos';
import { Stack } from '@mui/material';

export default function HomePage() {
  return (
    <Stack width={'100%'} height={'100vh'} overflow={'auto'}>
      <WhatsappButton />
      <Header />

      <Home />
      <Apresentacao />
      <Banner />
      <Caminhos />
      <Second />
      <MulherAndando />
      <PIlares />
      <Avaliacoes />
      <Questions />
      <Footer />
    </Stack>
  );
}
