import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Win Academy - Apprenez et évoluez',
  description: 'Win Academy est une plateforme de formation en ligne qui vous aide à développer vos compétences et à faire évoluer votre carrière.',
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
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#754efe" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
