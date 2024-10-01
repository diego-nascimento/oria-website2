import { Home } from '@/modules/Home';
import { Second } from '@/modules/Second';
import { WhatsappButton } from '@/modules/WhatsappButton';

export default function HomePage() {
  return (
    <div>
      <Home />
      <Second />
      <WhatsappButton />
    </div>
  );
}
