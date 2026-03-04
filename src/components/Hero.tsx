'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Users, BookOpen, Award } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero-section pb-16">
      <div className="hero-background"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-1 gap-12 items-center">
          {/* Content - Centered with animations */}
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="animate-slide-up mb-6 inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-white/90 text-sm font-medium">L'éducation numérique accessible à tous</span>
            </div>
            
            {/* Main Title */}
            <h1 className="animate-slide-up-delay-1 section-heading mb-8 text-5xl md:text-7xl font-bold leading-tight">
              <span className="text-white">Formez-vous </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">aujourd'hui.</span>
              <br />
              <span className="text-white">Gagnez </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">demain</span>
              <span className="text-white"> !</span>
            </h1>
            
            {/* Description */}
            <p className="animate-slide-up-delay-2 section-description mb-10 text-xl md:text-2xl text-white/80 font-light max-w-2xl mx-auto">
              Plateforme de formation pour la jeunesse Béninoise
            </p>
            
            {/* Buttons */}
            <div className="animate-slide-up-delay-3 flex flex-wrap items-center justify-center gap-6">
              <Link href="/formations" className="btn-primary group">
                <span>Commencer gratuitement</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/formations" className="flex items-center gap-3 text-white hover:text-blue-300 transition-colors font-medium text-lg px-6 py-3 rounded-full border border-white/30 hover:border-white/50 backdrop-blur-sm hover:bg-white/10 transition-all">
                <BookOpen className="w-5 h-5" />
                <span>Voir les cours</span>
              </Link>
            </div>
            
            {/* Stats with icons */}
            <div className="animate-slide-up-delay-3 flex flex-wrap justify-center gap-8 mt-12 pt-8 border-t border-white/20">
              <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm px-6 py-4 rounded-2xl border border-white/10 hover:bg-white/10 transition-all hover:-translate-y-1">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-400" />
                </div>
                <div className="text-left">
                  <p className="text-2xl font-bold text-white">5,000+</p>
                  <p className="text-white/70 text-sm">Apprenants</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm px-6 py-4 rounded-2xl border border-white/10 hover:bg-white/10 transition-all hover:-translate-y-1">
                <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-left">
                  <p className="text-2xl font-bold text-white">13</p>
                  <p className="text-white/70 text-sm">Formations</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm px-6 py-4 rounded-2xl border border-white/10 hover:bg-white/10 transition-all hover:-translate-y-1">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                  <Award className="w-6 h-6 text-purple-400" />
                </div>
                <div className="text-left">
                  <p className="text-2xl font-bold text-white">12</p>
                  <p className="text-white/70 text-sm">Certifications</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
