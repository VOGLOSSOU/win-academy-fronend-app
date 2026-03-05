import type { Metadata } from 'next';
import './globals.css';
import BackToTop from '@/components/BackToTop';

export const metadata: Metadata = {
  title: 'Wurami E-Learning - Apprenez et évoluez',
  description: 'Wurami E-Learning est une plateforme de formation en ligne qui vous aide à développer vos compétences et à faire évoluer votre carrière.',
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/images/Logo wurami.png" type="image/png" />
        <meta name="theme-color" content="#1877F2" />
      </head>
      <body className="antialiased">
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
