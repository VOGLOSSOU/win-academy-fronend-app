'use client';

import { Globe, Smartphone, Award, Zap } from 'lucide-react';

export default function PresentationSection() {
  const features = [
    { icon: Globe, text: 'Accessible partout au Bénin' },
    { icon: Smartphone, text: 'Optimisé pour mobile' },
    { icon: Award, text: 'Attestations certifiées' },
    { icon: Zap, text: 'Connexion faible débit' },
  ];

  return (
    <section className="presentation-section" id="presentation">
      <div className="container mx-auto px-4">
        <div className="presentation-grid">
          <div className="presentation-content">
            <h3>Notre Mission</h3>
            <p>
              Win Academy est une plateforme EdTech béninoise de formation en ligne dédiée à la maîtrise du digital, pensée spécifiquement pour les réalités locales, notamment les zones à faible débit internet.
            </p>
            <p>
              Ce n'est pas simplement un site de cours. C'est une infrastructure éducative numérique adaptée au contexte africain, permettant à tout jeune béninois d'accéder à des formations structurées et certifiantes.
            </p>
            <div className="presentation-features">
              {features.map((feature, index) => (
                <div key={index} className="presentation-feature">
                  <div className="presentation-feature-icon">
                    <feature.icon size={20} />
                  </div>
                  <span className="presentation-feature-text">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="presentation-image">
            <div className="hero-img" style={{ background: 'linear-gradient(135deg, var(--primary-light) 0%, var(--secondary-light) 100%)', padding: '4rem', borderRadius: '2rem' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ width: '120px', height: '120px', background: 'var(--primary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem' }}>
                  <Globe size={60} color="white" />
                </div>
                <h4 style={{ fontSize: '2rem', color: 'var(--text-dark)', marginBottom: '1rem' }}>Win Academy</h4>
                <p style={{ color: 'var(--text-gray)', fontSize: '1.4rem' }}>L'éducation numérique accessible à tous</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
