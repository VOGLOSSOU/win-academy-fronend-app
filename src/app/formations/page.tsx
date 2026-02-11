'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Search, Filter, Clock, Users, BookOpen, ChevronRight, Play } from 'lucide-react';

export default function FormationsPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'Toutes les formations' },
    { id: 'development', name: 'Développement Web' },
    { id: 'marketing', name: 'Marketing Digital' },
    { id: 'data', name: 'Data Science' },
    { id: 'design', name: 'Design Graphique' },
    { id: 'office', name: 'Bureautique' },
  ];

  const formations = [
    {
      id: 1,
      title: 'HTML & CSS Fondamentaux',
      category: 'development',
      description: 'Apprenez les bases du développement web avec HTML et CSS. Créez vos premières pages web.',
      duration: '4 semaines',
      students: 1250,
      level: 'Débutant',
      image: '/images/course-html.png',
      badge: 'Populaire',
    },
    {
      id: 2,
      title: 'JavaScript pour débutants',
      category: 'development',
      description: 'Maîtrisez les fondamentaux de JavaScript pour rendre vos sites web interactifs.',
      duration: '6 semaines',
      students: 980,
      level: 'Débutant',
      image: '/images/course-js.png',
      badge: null,
    },
    {
      id: 3,
      title: 'WordPress Complet',
      category: 'development',
      description: 'Créez et gérez des sites web professionnels avec WordPress sans coder.',
      duration: '5 semaines',
      students: 756,
      level: 'Intermédiaire',
      image: '/images/course-wp.png',
      badge: null,
    },
    {
      id: 4,
      title: 'Marketing Digital',
      category: 'marketing',
      description: 'Apprenez les stratégies de marketing digital pour promouvoir vos produits et services.',
      duration: '8 semaines',
      students: 1100,
      level: 'Tous niveaux',
      image: '/images/course-marketing.png',
      badge: 'Nouveau',
    },
    {
      id: 5,
      title: 'Réseaux Sociaux',
      category: 'marketing',
      description: 'Gérez efficacement la présence de votre entreprise sur les réseaux sociaux.',
      duration: '4 semaines',
      students: 890,
      level: 'Débutant',
      image: '/images/course-social.png',
      badge: null,
    },
    {
      id: 6,
      title: 'Excel Avancé',
      category: 'office',
      description: 'Maîtrisez les tableaux croisés dynamiques, les formules avancées et la automatisation.',
      duration: '6 semaines',
      students: 1500,
      level: 'Intermédiaire',
      image: '/images/course-excel.png',
      badge: 'Populaire',
    },
    {
      id: 7,
      title: 'Word & PowerPoint',
      category: 'office',
      description: 'Créez des documents professionnels et des présentations percutantes.',
      duration: '4 semaines',
      students: 1200,
      level: 'Débutant',
      image: '/images/course-office.png',
      badge: null,
    },
    {
      id: 8,
      title: 'Introduction à la Data Science',
      category: 'data',
      description: 'Découvrez les bases de l\'analyse de données et de la visualisation.',
      duration: '10 semaines',
      students: 450,
      level: 'Avancé',
      image: '/images/course-data.png',
      badge: null,
    },
    {
      id: 9,
      title: 'Canva pour les professionnels',
      category: 'design',
      description: 'Créez des designs professionnels pour vos réseaux sociaux et印刷材料.',
      duration: '3 semaines',
      students: 1650,
      level: 'Débutant',
      image: '/images/course-canva.png',
      badge: 'Populaire',
    },
  ];

  const filteredFormations = formations.filter(formation => {
    const matchesCategory = activeCategory === 'all' || formation.category === activeCategory;
    const matchesSearch = formation.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         formation.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-56 pb-16 bg-light">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="section-title-main mb-6">Nos Formations</h1>
              <p className="section-description mb-8">
                Découvrez nos formations numériques adaptées aux réalités béninoises. 
                Apprenez à votre rythme et validez vos compétences avec nos certifications.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-xl mx-auto relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Rechercher une formation..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-full border border-gray-200 focus:outline-none focus:border-primary text-dark"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-2 rounded-full font-medium transition-colors ${
                    activeCategory === category.id
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Formations Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredFormations.map((formation) => (
                <div key={formation.id} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  {/* Image */}
                  <div className="relative h-48 bg-gray-100">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                      <BookOpen size={48} />
                    </div>
                    {formation.badge && (
                      <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                        {formation.badge}
                      </div>
                    )}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black/50">
                      <button className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-primary">
                        <Play size={24} fill="currentColor" />
                      </button>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-sm text-primary font-medium">
                        {categories.find(c => c.id === formation.category)?.name}
                      </span>
                      <span className="text-gray-300">•</span>
                      <span className="text-sm text-gray-500">{formation.level}</span>
                    </div>

                    <h3 className="text-xl font-bold text-dark mb-2">{formation.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm line-clamp-2">{formation.description}</p>

                    {/* Meta */}
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Clock size={16} />
                        <span>{formation.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users size={16} />
                        <span>{formation.students.toLocaleString()} apprenants</span>
                      </div>
                    </div>

                    {/* CTA */}
                    <Link
                      href={`/formations/${formation.id}`}
                      className="flex items-center justify-center gap-2 w-full py-3 bg-primary-light text-primary font-medium rounded-lg hover:bg-primary hover:text-white transition-colors"
                    >
                      Voir la formation
                      <ChevronRight size={18} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {filteredFormations.length === 0 && (
              <div className="text-center py-16">
                <BookOpen size={64} className="mx-auto text-gray-300 mb-4" />
                <h3 className="text-xl font-semibold text-dark mb-2">Aucune formation trouvée</h3>
                <p className="text-gray-600">Essayez avec d'autres mots-clés ou catégories.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-light">
          <div className="container mx-auto px-4 text-center">
            <h2 className="section-title-main mb-4">Vous ne savez pas par où commencer ?</h2>
            <p className="section-description mb-8 max-w-2xl mx-auto">
              Nos conseillers pédagogiques sont là pour vous guider vers la formation 
              qui correspond le mieux à vos objectifs.
            </p>
            <Link href="/inscription" className="btn-primary">
              Être accompagné gratuitement
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
