'use client';
import { FloatingWhatsApp } from '@carlos8a/react-whatsapp-floating-button';

export const WhatsappButton = () => {
  return (
    <div>
      <FloatingWhatsApp
        phoneNumber="5532999658169" // Required
        accountName="Ariane Miranda" // Optional
        avatar="/oria-whatsapp.png" // Optional
        initialMessageByServer="Olá! Como posso te ajudar??" // Optional
        initialMessageByClient="Alo gata, preciso dessa mensagem inicial pro whatsapp pra por aqui" // Optional
        statusMessage="Disponível" // Optional
        startChatText="Comece a falar comigo" // Optional
        tooltipText="Precisa de ajuda! Fale comigo" // Optional
        allowEsc={true}
      />
    </div>
  );
};
