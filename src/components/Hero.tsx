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
              <span>La plateforme d'apprentissage la plus fiable</span>
            </div>
            <h1 className="section-heading mb-6">
              Développez vos compétences et faites évoluer votre carrière
            </h1>
            <p className="section-description mb-8">
              Rejoignez des milliers d'apprenants qui transforment leur avenir grâce à nos formations de qualité.
            </p>
            <div className="flex items-center gap-4">
              <Link href="/inscription" className="btn-primary">
                Rejoindre gratuitement
              </Link>
              <Link href="/formations" className="flex items-center gap-3 text-gray-600 hover:text-primary transition-colors ml-3">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-white">
                  <Play size={24} fill="currentColor" />
                </div>
                <span className="font-medium">Voir la démo</span>
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-slide-up">
            <Image
              src="/images/hero-img.png"
              alt="Hero Image"
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
