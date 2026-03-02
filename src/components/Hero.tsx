'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Play, CheckCircle, ArrowRight } from 'lucide-react';

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
              Formez-vous aujourd'hui. Gagnez demain !
            </h1>
            <p className="section-description mb-8">
              Plateforme de formation pour la jeunesse Béninoise
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/formations" className="btn-primary">
                Découvrir les formations
              </Link>
              <Link href="/certifications" className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors font-medium">
                Voir les certifications
                <ArrowRight size={20} />
              </Link>
            </div>
            
            {/* Stats */}
            <div className="flex flex-wrap gap-8 mt-10 pt-8 border-t">
              <div>
                <p className="text-3xl font-bold text-primary">5,000+</p>
                <p className="text-gray-600">Apprenants</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">13</p>
                <p className="text-gray-600">Formations</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">12</p>
                <p className="text-gray-600">Certifications</p>
              </div>
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
