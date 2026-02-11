'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Play, CheckCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero-main-container pb-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <div className="section-title mb-4">
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
              Formez-vous au numérique
            </h1>
            <p className="section-description mb-8">
              Win Academy démocratise l'accès à l'éducation numérique pour les élèves du Nord Bénin et des zones reculées. Formez-vous même avec une connexion limitée.
            </p>
            <div className="flex items-center gap-4">
              <Link href="/inscription" className="btn-primary">
                Commencer gratuitement
              </Link>
              <Link href="/formations" className="flex items-center gap-3 text-gray-600 hover:text-primary transition-colors ml-3">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-white">
                  <Play size={24} fill="currentColor" />
                </div>
                <span className="font-medium">Voir nos formations</span>
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-slide-up">
            <Image
              src="/images/hero-img.png"
              alt="Élèves béninois apprenant le numérique"
              width={500}
              height={400}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
