'use client';

import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Marie Kouami',
    role: 'Développeuse Web',
    company: 'Freelance',
    course: 'Développement Web',
    text: 'Win Academy m\'a permis de lancer ma carrière de développeuse en seulement 6 mois. Les cours sont clairs et adaptés à notre contexte béninois. Aujourd\'hui, je travaille pour des clients internationaux.',
    initials: 'MK',
  },
  {
    name: 'Thomas Hounkpe',
    role: ' Entrepreneur',
    company: 'Digital Agency',
    course: 'Marketing Digital',
    text: 'Excellente plateforme ! J\'ai pu créer ma propre agence de marketing digital grâce aux formations pratiques et concrètes. Le certificat m\'a beaucoup aidé à gagner la confiance de mes clients.',
    initials: 'TH',
  },
  {
    name: 'Adélaïde Mensah',
    role: 'Data Analyst',
    company: 'Banque Atlantique',
    course: 'Data Science',
    text: 'Les formateurs sont compétents et le système d\'attestation avec QR code m\'a beaucoup aidée à trouver un emploi. Je recommande Win Academy à tous les jeunes béninois qui veulent évoluer.',
    initials: 'AM',
  },
  {
    name: 'Jean-Baptiste Akakpo',
    role: 'Chef d\'entreprise',
    company: 'AgriTech Benin',
    course: 'Agribusiness',
    text: 'La formation en agribusiness m\'a appris à transformer ma production et à vendre mes produits à meilleur prix. Mon chiffre d\'affaires a augmenté de 40% en 6 mois.',
    initials: 'JA',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-light" id="temoignages">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Ils nous font confiance
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez les témoignages de ceux qui ont transformé leur vie avec Win Academy
          </p>
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((_, i) => (
                  <Star key={i} size={18} fill="#FBBF24" className="text-yellow-400" />
                ))}
              </div>
              
              <div className="relative mb-6">
                <Quote className="absolute -top-2 -left-2 text-primary/20" size={32} />
                <p className="text-gray-700 leading-relaxed relative z-10">
                  "{testimonial.text}"
                </p>
              </div>
              
              <div className="flex items-center gap-4 pt-4 border-t">
                <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.initials}
                </div>
                <div>
                  <h4 className="font-bold text-dark">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role} • {testimonial.company}</p>
                  <p className="text-sm text-primary">{testimonial.course}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t">
          <div className="text-center">
            <p className="text-4xl font-bold text-primary">5,000+</p>
            <p className="text-gray-600">Apprenants formés</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-primary">1,200+</p>
            <p className="text-gray-600">Certifiés</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-primary">95%</p>
            <p className="text-gray-600">Taux de satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
}
