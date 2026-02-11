'use client';

import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Marie Kouami',
    course: 'Développement Web',
    text: 'Win Academy m\'a permis de lancer ma carrière de développeuse en seulement 6 mois. Les cours sont clairs et adaptés à notre contexte.',
    initials: 'MK',
  },
  {
    name: 'Thomas Hounkpe',
    course: 'Marketing Digital',
    text: 'Excellente plateforme ! J\'ai pu créer ma propre agence grâce aux formations pratiques et concrètes.',
    initials: 'TH',
  },
  {
    name: 'Adélaïde Mensah',
    course: 'Data Science',
    text: 'Les formateurs sont compétents et le système d\'attestation avec QR code m\'a beaucoup aidée à trouver un emploi.',
    initials: 'AM',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="testimonials-section" id="temoignages">
      <div className="container mx-auto px-4">
        <div className="section-header">
          <h2 className="section-title-main">Ce que disent nos apprenants</h2>
          <p className="section-subtitle">Découvrez les témoignages de ceux qui ont transformé leur vie avec Win Academy</p>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-content">
                <div className="testimonial-stars">
                  {[1, 2, 3, 4, 5].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
              </div>
              <div className="testimonial-author">
                <div className="testimonial-avatar">{testimonial.initials}</div>
                <div className="testimonial-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.course}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
