import './style.css';
import { AppThemeProvider } from '@/shared/Providers/themeProvider';

import type { Metadata } from 'next';

import '@fontsource/bree-serif/400.css';

export const metadata: Metadata = {
  title: 'Psicóloga Ariane Miranda - Psicologia Perinatal e Parental | Ubá-MG',
  description:
    'Psicóloga especializada em psicologia perinatal e parental. Atendimento para gestantes, puérperas e famílias. Consultas online e presenciais em Ubá-MG. CRP 04/67556',
  keywords:
    'psicóloga, psicologia perinatal, psicologia parental, gestação, puerpério, maternidade, psicóloga ubá, psicóloga online, CRP 04/67556',
  authors: [{ name: 'Ariane Miranda' }],
  creator: 'Ariane Miranda',
  publisher: 'Ariane Miranda',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://arianemiranda.com.br'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Psicóloga Ariane Miranda - Psicologia Perinatal e Parental',
    description:
      'Psicóloga especializada em psicologia perinatal e parental. Atendimento para gestantes, puérperas e famílias. Consultas online e presenciais em Ubá-MG.',
    url: 'https://arianemiranda.com.br',
    siteName: 'Psicóloga Ariane Miranda',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Psicóloga Ariane Miranda - Psicologia Perinatal',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'G-K2Q6Z3WDLV',
  },
  icons: {
    icon: '/favicon-32x32.png',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-K2Q6Z3WDLV"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-K2Q6Z3WDLV');`,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-P97GXD29');`,
          }}
        />

        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'MedicalBusiness',
              name: 'Psicóloga Ariane Miranda',
              description:
                'Psicóloga especializada em psicologia perinatal e parental',
              url: 'https://arianemiranda.com.br',
              telephone: '+55-32-99999-9999',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Ubá',
                addressRegion: 'MG',
                addressCountry: 'BR',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: '-21.1204',
                longitude: '-42.9426',
              },
              openingHours: 'Mo-Fr 08:00-18:00',
              priceRange: '$$',
              medicalSpecialty: 'Psicologia Perinatal e Parental',
              availableService: [
                {
                  '@type': 'MedicalService',
                  name: 'Psicologia Perinatal',
                  description: 'Atendimento psicológico para gestantes',
                },
                {
                  '@type': 'MedicalService',
                  name: 'Psicologia Parental',
                  description: 'Atendimento psicológico para famílias',
                },
              ],
              practitioner: {
                '@type': 'Person',
                name: 'Ariane Miranda',
                jobTitle: 'Psicóloga',
                description:
                  'CRP 04/67556 - Especialista em Psicologia Perinatal e Parental',
              },
              sameAs: [
                'https://www.instagram.com/arianemiranda.psi',
                'https://www.facebook.com/arianemiranda.psi',
              ],
            }),
          }}
        />

        <meta name="color-scheme" content="light only" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P97GXD29"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>

        <AppThemeProvider>{children}</AppThemeProvider>
      </body>
    </html>
  );
}
