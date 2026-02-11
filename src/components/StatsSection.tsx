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
    <section className="stats-section" id="statistiques">
      <div className="container mx-auto px-4">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-box">
              <div className="stat-icon">
                <stat.icon size={32} />
              </div>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
