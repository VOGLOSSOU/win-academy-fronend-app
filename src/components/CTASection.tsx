'use client';

import Link from 'next/link';
import { Users, BookOpen, Award } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="cta-section" id="cta">
      <div className="container mx-auto px-4">
        <div className="cta-container">
          <h2 className="cta-title">Prêt à transformer votre avenir ?</h2>
          <p className="cta-description">Rejoignez notre communauté d'apprenants et commencez votre parcours vers le succès dès aujourd'hui.</p>
          
          <div className="cta-buttons">
            <Link href="/inscription" className="btn-primary btn-large">
              Commencer gratuitement
            </Link>
            <Link href="/formations" className="btn-secondary">
              Voir tous les cours
            </Link>
          </div>

          {/* Stats */}
          <div className="cta-stats">
            <div className="stat-item">
              <Users size={32} className="mx-auto mb-2" />
              <span className="stat-number">10,000+</span>
              <span className="stat-label">Étudiants</span>
            </div>
            <div className="stat-item">
              <BookOpen size={32} className="mx-auto mb-2" />
              <span className="stat-number">50+</span>
              <span className="stat-label">Cours</span>
            </div>
            <div className="stat-item">
              <Award size={32} className="mx-auto mb-2" />
              <span className="stat-number">100+</span>
              <span className="stat-label">Formateurs</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
