import './style.css';
import { AppThemeProvider } from '@/shared/Providers/themeProvider';

import { CssBaseline } from '@mui/material';
import type { Metadata } from 'next';

import '@fontsource/playfair-display/400.css';
import '@fontsource/playfair-display/500.css';
import '@fontsource/playfair-display/700.css';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppThemeProvider>
          <CssBaseline />
          {children}
        </AppThemeProvider>
      </body>
    </html>
  );
}
