'use client';

import Link from 'next/link';
import { 
  Code, Smartphone, BarChart3, Briefcase, 
  Palette, Cloud, ArrowRight 
} from 'lucide-react';

const courses = [
  {
    icon: Code,
    title: 'Développement Web',
    description: 'Apprenez HTML, CSS, JavaScript et les frameworks modernes pour créer des sites web performants.',
    href: '/formations/developpement-web',
  },
  {
    icon: Smartphone,
    title: 'Développement Mobile',
    description: 'Maîtrisez React Native et Flutter pour créer des applications mobiles natives.',
    href: '/formations/developpement-mobile',
  },
  {
    icon: BarChart3,
    title: 'Data Science',
    description: 'Analysez des données avec Python, Machine Learning et IA pour des décisions éclairées.',
    href: '/formations/data-science',
  },
  {
    icon: Briefcase,
    title: 'Marketing Digital',
    description: 'Apprenez le SEO, les réseaux sociaux et la publicité en ligne pour booster votre entreprise.',
    href: '/formations/marketing-digital',
  },
  {
    icon: Palette,
    title: 'Design Graphique',
    description: 'Maîtrisez Photoshop, Illustrator et Figma pour créer des designs professionnels.',
    href: '/formations/design-graphique',
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    description: 'Deployez et gérez vos applications avec AWS, Azure et les pratiques DevOps.',
    href: '/formations/cloud-devops',
  },
];

export default function CoursesSection() {
  return (
    <section className="courses-section" id="courses">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="section-header">
          <h2 className="section-title-main">Nos Cours Populaires</h2>
          <p className="section-subtitle">Découvrez nos formations les plus appréciées par nos étudiants</p>
        </div>

        {/* Courses Grid */}
        <div className="courses-grid">
          {courses.map((course, index) => (
            <div key={index} className="course-card">
              <div className="course-icon">
                <course.icon size={32} />
              </div>
              <h3 className="course-title">{course.title}</h3>
              <p className="course-description">{course.description}</p>
              <Link href={course.href} className="course-link">
                Voir le cours <ArrowRight size={18} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
