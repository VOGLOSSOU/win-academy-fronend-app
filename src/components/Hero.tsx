'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero-section pb-16">
      <div className="hero-background"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-1 gap-12 items-center">
          {/* Content - Centered */}
          <div className="animate-fade-in text-center max-w-4xl mx-auto">
            <div className="section-title mb-4 justify-center">
              <Image 
                src="/images/icon-check.svg" 
                alt="icon" 
                width={24} 
                height={24} 
                className="w-6 h-6"
              />
              <span>L'éducation numérique accessible à tous</span>
            </div>
            <h1 className="section-heading mb-6">
              Formez-vous aujourd'hui.<br />Gagnez demain !
            </h1>
            <p className="section-description mb-8">
              Plateforme de formation pour la jeunesse Béninoise
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/formations" className="btn-primary">
                Commencer gratuitement
              </Link>
              <Link href="/certifications" className="flex items-center gap-2 text-white hover:text-gray-200 transition-colors font-medium">
                Voir les cours
                <ArrowRight size={20} />
              </Link>
            </div>
            
            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 mt-10 pt-8 border-t border-gray-200/30">
              <div>
                <p className="text-3xl font-bold text-primary">5,000+</p>
                <p className="text-white/80">Apprenants</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">13</p>
                <p className="text-white/80">Formations</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">12</p>
                <p className="text-white/80">Certifications</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
