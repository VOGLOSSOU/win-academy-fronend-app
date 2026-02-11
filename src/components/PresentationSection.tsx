'use client';

import Image from 'next/image';
import { Globe, Smartphone, Award, Zap } from 'lucide-react';

export default function PresentationSection() {
  const features = [
    { icon: Globe, text: 'Accessible partout au Bénin' },
    { icon: Smartphone, text: 'Optimisé pour mobile et faible connexion' },
    { icon: Award, text: 'Attestations avec QR code' },
    { icon: Zap, text: 'Chargement rapide même avec peu de données' },
  ];

  return (
    <section className="presentation-section" id="presentation">
      <div className="container mx-auto px-4">
        <div className="presentation-grid">
          <div className="presentation-content">
            <h3>Notre Mission</h3>
            <p>
              Win Academy démocratise l'accès à l'éducation numérique pour les élèves du Nord Bénin et des zones reculées. Notre objectif est de permettre à chacun d'acquérir des compétences digitales essentielles.
            </p>
            <p>
              Ce n'est pas simplement un site de cours. C'est une infrastructure éducative pensée pour les réalités béninoises, offrant des formations structurées et certifiantes accessibles même avec une connexion limitée.
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
