'use client';

import Link from 'next/link';
import { 
  Code, Smartphone, BarChart3, Briefcase, 
  Palette, Cloud, ArrowRight, Target, Leaf, Heart, Sparkles
} from 'lucide-react';

const categories = [
  {
    icon: Briefcase,
    title: 'Formations Digitales',
    description: 'Marketing digital, Community management, IA et outils modernes',
    href: '/formations?category=digital',
    color: 'blue',
  },
  {
    icon: Target,
    title: 'Entrepreneuriat & Business',
    description: 'Création d\'entreprise, Gestion financière, E-commerce',
    href: '/formations?category=entrepreneuriat',
    color: 'green',
  },
  {
    icon: Leaf,
    title: 'Agribusiness',
    description: 'Transformation agroalimentaire, Commercialisation, Gestion agricole',
    href: '/formations?category=agribusiness',
    color: 'emerald',
  },
  {
    icon: Heart,
    title: 'Leadership & Développement',
    description: 'Prise de parole, Confiance en soi, Productivité',
    href: '/formations?category=leadership',
    color: 'rose',
  },
];

export default function CoursesSection() {
  return (
    <section className="py-16 bg-light" id="formations">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Nos Formations
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Des formations adaptées aux réalités béninoises pour développer vos compétences et créer des revenus
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className={`w-14 h-14 rounded-xl bg-${category.color}-100 flex items-center justify-center mb-4`}>
                <category.icon className={`text-${category.color}-600`} size={28} />
              </div>
              <h3 className="text-xl font-bold text-dark mb-2">{category.title}</h3>
              <p className="text-gray-600 mb-4 text-sm">{category.description}</p>
              <Link 
                href={category.href} 
                className={`inline-flex items-center gap-2 text-${category.color}-600 font-medium hover:underline`}
              >
                Découvrir <ArrowRight size={18} />
              </Link>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Link href="/formations" className="btn-primary">
            Voir toutes les formations
          </Link>
        </div>
      </div>
    </section>
  );
}
