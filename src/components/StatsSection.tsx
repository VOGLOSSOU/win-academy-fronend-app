'use client';

import { Users, BookOpen, Award, TrendingUp } from 'lucide-react';

export default function StatsSection() {
  const stats = [
    { icon: Users, value: '10,000+', label: 'Apprenants' },
    { icon: BookOpen, value: '50+', label: 'Formations' },
    { icon: Award, value: '5,000+', label: 'Attestations délivrées' },
    { icon: TrendingUp, value: '15,000+', label: 'Personnes impactées' },
  ];

  return (
    <section className="py-8 bg-white" id="statistiques">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-blue-100 flex items-center justify-center">
                <stat.icon className="text-primary" size={28} />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-dark">{stat.value}</div>
              <div className="text-gray-600 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
