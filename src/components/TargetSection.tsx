'use client';

import { School, Briefcase, Sparkles, Users } from 'lucide-react';

const targets = [
  {
    icon: School,
    title: 'Les étudiants',
    description: 'Complétez votre formation académique avec des compétences pratiques recherchées sur le marché.',
  },
  {
    icon: Briefcase,
    title: 'Les professionnels',
    description: 'Mettez à jour vos compétences ou faites une reconversion professionnelle dans le numérique.',
  },
  {
    icon: Sparkles,
    title: 'Les entrepreneurs',
    description: 'Acquérez les compétences techniques pour développer votre projet ou votre entreprise.',
  },
  {
    icon: Users,
    title: 'Les curieux',
    description: 'Démarrez une nouvelle passion ou explorez de nouveaux domaines à votre rythme.',
  },
];

export default function TargetSection() {
  return (
    <section className="target-section" id="cible">
      <div className="container mx-auto px-4">
        <div className="section-header">
          <h2 className="section-title-main">Pour qui est faite Win Academy ?</h2>
          <p className="section-subtitle">Notre plateforme s'adresse à tous ceux qui veulent apprendre et évoluer</p>
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
