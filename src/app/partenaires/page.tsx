'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PartnersSection from '@/components/PartnersSection';
import { Handshake } from 'lucide-react';

export default function PartenairesPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-light">
        {/* Hero Section */}
        <section className="pt-56 pb-16 bg-primary">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <div className="flex justify-center mb-4">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                  <Handshake size={40} className="text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Nos Partenaires
              </h1>
              <p className="text-xl text-white/90">
                Nous collaborons avec des organisations engagées pour démocratiser l'éducation numérique au Benin
              </p>
            </div>
          </div>
        </section>

        {/* Partners Section - Trust indicators */}
        <PartnersSection />

      </main>
      <Footer />
    </>
  );
}
