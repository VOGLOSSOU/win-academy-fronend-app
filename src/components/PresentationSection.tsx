'use client';

import Image from 'next/image';
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
            <Image
              src="/images/win-mission.png"
              alt="Win Academy - Mission"
              width={600}
              height={500}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
