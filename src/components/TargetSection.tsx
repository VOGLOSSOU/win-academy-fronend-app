'use client';

import { School, MapPin, Users, GraduationCap } from 'lucide-react';

const targets = [
  {
    icon: School,
    title: 'Élèves du secondaire',
    description: 'Préparez-vous au monde numérique dès maintenant et développez des compétences recherchées.',
  },
  {
    icon: MapPin,
    title: 'Zones rurales',
    description: 'Suivez des formations de qualité depuis chez vous, même avec une connexion limitée.',
  },
  {
    icon: Users,
    title: 'Familles à revenus modestes',
    description: 'Accédez à une éducation numérique de qualité sans frais élevés.',
  },
  {
    icon: GraduationCap,
    title: 'Jeunes diplômés',
    description: 'Complétez votre formation académique avec des compétences pratiques pour le marché du travail.',
  },
];

export default function TargetSection() {
  return (
    <section className="target-section" id="cible">
      <div className="container mx-auto px-4">
        <div className="section-header">
          <h2 className="section-title-main">Pour qui est faite Win Academy ?</h2>
          <p className="section-subtitle">Notre plateforme est spécialement conçue pour les élèves des zones défavorisées du Bénin</p>
        </div>
        
        <div className="target-grid">
          {targets.map((target, index) => (
            <div key={index} className="target-card">
              <div className="target-icon">
                <target.icon size={32} />
              </div>
              <h4 className="target-title">{target.title}</h4>
              <p className="target-description">{target.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
