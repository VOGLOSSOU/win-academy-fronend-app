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
    <section className="for-who-section" id="for-who">
      <div className="container mx-auto px-4">
        <div className="for-who-container">
          <div className="for-who-content">
            <h2 className="section-title-main">Pour qui est faite Win Academy ?</h2>
            <p className="section-subtitle">Notre plateforme s'adresse à tous ceux qui veulent apprendre et évoluer</p>
            
            <div className="target-groups">
              {targets.map((target, index) => (
                <div key={index} className="target-item">
                  <div className="target-icon">
                    <target.icon size={28} />
                  </div>
                  <div className="target-text">
                    <h4>{target.title}</h4>
                    <p>{target.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
