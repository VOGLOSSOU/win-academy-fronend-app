'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PartnersSection from '@/components/PartnersSection';
import { 
  Search, 
  Clock, 
  Users, 
  BookOpen, 
  ChevronRight, 
  Play,
  Filter,
  Star,
  Award,
  DollarSign,
  Sparkles
} from 'lucide-react';

export default function FormationsPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [selectedDuration, setSelectedDuration] = useState('all');
  const [selectedPrice, setSelectedPrice] = useState('all');

  const categories = [
    { id: 'all', name: 'Toutes les formations' },
    { id: 'digital', name: 'Formations Digitales' },
    { id: 'entrepreneuriat', name: 'Entrepreneuriat & Business' },
    { id: 'agribusiness', name: 'Agribusiness & Transformation' },
    { id: 'leadership', name: 'Leadership & Développement Personnel' },
  ];

  const levels = [
    { id: 'all', name: 'Tous les niveaux' },
    { id: 'debutant', name: 'Débutant' },
    { id: 'intermediaire', name: 'Intermédiaire' },
    { id: 'avance', name: 'Avancé' },
  ];

  const durations = [
    { id: 'all', name: 'Toutes les durées' },
    { id: 'courte', name: 'Courte (< 1 mois)' },
    { id: 'moyenne', name: 'Moyenne (1-3 mois)' },
    { id: 'longue', name: 'Longue (> 3 mois)' },
  ];

  const prices = [
    { id: 'all', name: 'Tous les prix' },
    { id: 'gratuit', name: 'Gratuit' },
    { id: 'payant', name: 'Payant' },
  ];

  const formations = [
    // Formations Digitales
    {
      id: 1,
      title: 'Marketing Digital',
      category: 'digital',
      subcategory: 'Marketing digital',
      description: 'Maîtrisez les stratégies de marketing digital pour promouvoir vos produits et services en ligne.',
      duration: '8 semaines',
      durationType: 'moyenne',
      students: 1250,
      level: 'Débutant',
      price: 25000,
      isFree: false,
      instructor: 'Marc DOSSA',
      hasCertificate: true,
      badge: 'La plus suivie',
      objectives: [
        'Comprendre les fondamentaux du marketing digital',
        'Maîtriser le SEO et le référencement',
        'Gérer des campagnes publicitaires en ligne',
        'Analyser les performances avec des outils analytics'
      ],
      skills: ['SEO', 'Google Ads', 'Facebook Ads', 'Analytics', 'Email Marketing']
    },
    {
      id: 2,
      title: 'Community Management',
      category: 'digital',
      subcategory: 'Community management',
      description: 'Apprenez à gérer efficacement la présence de votre marque sur les réseaux sociaux.',
      duration: '6 semaines',
      durationType: 'moyenne',
      students: 980,
      level: 'Débutant',
      price: 20000,
      isFree: false,
      instructor: 'Chantal AHOUANSOU',
      hasCertificate: true,
      badge: 'Très demandée',
      objectives: [
        'Créer une stratégie de contenu',
        'Gérer plusieurs réseaux sociaux',
        'Interagir avec la communauté',
        'Mesurer l\'engagement'
      ],
      skills: ['Facebook', 'Instagram', 'LinkedIn', 'Twitter', 'Gestion de communauté']
    },
    {
      id: 3,
      title: 'Introduction à l\'Intelligence Artificielle',
      category: 'digital',
      subcategory: 'IA & outils modernes',
      description: 'Découvrez comment utiliser l\'IA et les outils modernes pour booster votre productivité.',
      duration: '4 semaines',
      durationType: 'courte',
      students: 756,
      level: 'Débutant',
      price: 0,
      isFree: true,
      instructor: 'Dr Jean KAKPO',
      hasCertificate: true,
      badge: 'Nouvelle formation',
      objectives: [
        'Comprendre les bases de l\'IA',
        'Utiliser ChatGPT et autres outils IA',
        'Automatiser des tâches répétitives',
        'Intégrer l\'IA dans son quotidien professionnel'
      ],
      skills: ['IA', 'ChatGPT', 'Automatisation', 'Outils productivity']
    },
    {
      id: 4,
      title: 'Compétences Numériques Professionnelles',
      category: 'digital',
      subcategory: 'Compétences numériques',
      description: 'Acquérez les compétences numériques essentielles pour le monde professionnel.',
      duration: '10 semaines',
      durationType: 'longue',
      students: 1500,
      level: 'Débutant',
      price: 35000,
      isFree: false,
      instructor: 'Patricia HOUNKPE',
      hasCertificate: true,
      badge: null,
      objectives: [
        'Maîtriser Word et Excel niveau avancé',
        'Créer des présentations professionnelles',
        'Utiliser les outils de visioconférence',
        'Travailler en collaboration avec les outils numériques'
      ],
      skills: ['Word', 'Excel', 'PowerPoint', 'Google Workspace', 'Teams']
    },
    // Entrepreneuriat & Business
    {
      id: 5,
      title: 'Création d\'Entreprise',
      category: 'entrepreneuriat',
      subcategory: 'Création d\'entreprise',
      description: 'Transformez votre idée en entreprise rentable. De l\'idée à la concrétisation.',
      duration: '12 semaines',
      durationType: 'longue',
      students: 890,
      level: 'Intermédiaire',
      price: 45000,
      isFree: false,
      instructor: 'Armand TCHIBOZO',
      hasCertificate: true,
      badge: 'La plus suivie',
      objectives: [
        'Valider votre idée de business',
        'Élaborer un business model',
        'Rédiger un business plan',
        'Trouver les financements'
      ],
      skills: ['Business Model', 'Business Plan', 'Finance', 'Stratégie']
    },
    {
      id: 6,
      title: 'Gestion Financière',
      category: 'entrepreneuriat',
      subcategory: 'Gestion financière',
      description: 'Apprenez à gérer les finances de votre entreprise efficacement.',
      duration: '8 semaines',
      durationType: 'moyenne',
      students: 650,
      level: 'Intermédiaire',
      price: 30000,
      isFree: false,
      instructor: 'Fabienne ALIHONOU',
      hasCertificate: true,
      badge: null,
      objectives: [
        'Comptabilité de base',
        'Gestion de la trésorerie',
        'Analyse financière',
        'Prévisionnel budgétaire'
      ],
      skills: ['Comptabilité', 'Trésorerie', 'Budget', 'Finance']
    },
    {
      id: 7,
      title: 'E-commerce',
      category: 'entrepreneuriat',
      subcategory: 'E-commerce',
      description: 'Créez et gérez votre boutique en ligne pour vendre vos produits.',
      duration: '6 semaines',
      durationType: 'moyenne',
      students: 780,
      level: 'Débutant',
      price: 28000,
      isFree: false,
      instructor: 'Christian AMOUSSOU',
      hasCertificate: true,
      badge: 'Très demandée',
      objectives: [
        'Choisir sa plateforme e-commerce',
        'Optimiser les conversions',
        'Gérer la logistique',
        'Mettre en place le paiement en ligne'
      ],
      skills: ['WooCommerce', 'Shopify', 'Marketing digital', 'Logistique']
    },
    // Agribusiness
    {
      id: 8,
      title: 'Transformation Agroalimentaire',
      category: 'agribusiness',
      subcategory: 'Transformation agroalimentaire',
      description: 'Apprenez à transformer les produits agricoles pour augmenter leur valeur.',
      duration: '10 semaines',
      durationType: 'longue',
      students: 420,
      level: 'Tous niveaux',
      price: 40000,
      isFree: false,
      instructor: 'Rosine SOBE',
      hasCertificate: true,
      badge: null,
      objectives: [
        'Techniques de transformation',
        'Normes d\'hygiène',
        'Emballage et conservation',
        'Création de valeur ajoutée'
      ],
      skills: ['Transformation', 'Hygiène', 'Emballage', 'Valorisation']
    },
    {
      id: 9,
      title: 'Commercialisation Agricole',
      category: 'agribusiness',
      subcategory: 'Commercialisation locale',
      description: 'Découvrez comment commercialiser vos produits agricoles efficacement.',
      duration: '6 semaines',
      durationType: 'moyenne',
      students: 380,
      level: 'Débutant',
      price: 0,
      isFree: true,
      instructor: 'Antoine KLOKO',
      hasCertificate: true,
      badge: 'Nouvelle formation',
      objectives: [
        'Identifier les marchés',
        'Techniques de négociation',
        'Fixation des prix',
        'Distribution'
      ],
      skills: ['Marketing', 'Négociation', 'Distribution', 'Prix']
    },
    {
      id: 10,
      title: 'Gestion d\'Activité Agricole',
      category: 'agribusiness',
      subcategory: 'Gestion d\'activité agricole',
      description: 'Gérez votre exploitation agricole comme une véritable entreprise.',
      duration: '8 semaines',
      durationType: 'moyenne',
      students: 290,
      level: 'Intermédiaire',
      price: 32000,
      isFree: false,
      instructor: 'Paul YOUSSAO',
      hasCertificate: true,
      badge: null,
      objectives: [
        'Planification des cultures',
        'Gestion des intrants',
        'Suivi de la productivité',
        'Rentabilité'
      ],
      skills: ['Planning', 'Gestion', 'Productivité', 'Rentabilité']
    },
    // Leadership
    {
      id: 11,
      title: 'Prise de Parole en Public',
      category: 'leadership',
      subcategory: 'Prise de parole',
      description: 'Maîtrisez l\'art de parler en public et captiverez votre audience.',
      duration: '4 semaines',
      durationType: 'courte',
      students: 560,
      level: 'Tous niveaux',
      price: 0,
      isFree: true,
      instructor: 'Marie-Laure ADJOVI',
      hasCertificate: true,
      badge: 'La plus suivie',
      objectives: [
        'Surmonter le trac',
        'Structurer son discours',
        'Techniques de respiration',
        'Communication non verbale'
      ],
      skills: ['Expression', 'Rhétorique', 'Confiance', 'Gestuelle']
    },
    {
      id: 12,
      title: 'Confiance en Soi',
      category: 'leadership',
      subcategory: 'Confiance en soi',
      description: 'Développez votre confiance en vous pour atteindre vos objectifs.',
      duration: '3 semaines',
      durationType: 'courte',
      students: 480,
      level: 'Tous niveaux',
      price: 0,
      isFree: true,
      instructor: 'Dr Josépha OLOGEL',
      hasCertificate: true,
      badge: null,
      objectives: [
        'Reconnaître ses valeurs',
        'Techniques d\'affirmation',
        'Gestion du stress',
        ' Mindset positif'
      ],
      skills: ['Estime de soi', 'Affirmation', 'Stress management', 'Positive thinking']
    },
    {
      id: 13,
      title: 'Discipline & Productivité',
      category: 'leadership',
      subcategory: 'Discipline & productivité',
      description: 'Apprenez à être plus productif et à gérer votre temps efficacement.',
      duration: '4 semaines',
      durationType: 'courte',
      students: 720,
      level: 'Débutant',
      price: 15000,
      isFree: false,
      instructor: 'Sébastien AHMED',
      hasCertificate: true,
      badge: 'Très demandée',
      objectives: [
        'Techniques de gestion du temps',
        'Méthodes de productivity',
        'Évitement des distractions',
        'Équilibre vie pro/perso'
      ],
      skills: ['Time management', 'Productivité', 'Organisation', 'Discipline']
    },
  ];

  const filteredFormations = formations.filter(formation => {
    const matchesCategory = activeCategory === 'all' || formation.category === activeCategory;
    const matchesSearch = formation.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         formation.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLevel = selectedLevel === 'all' || 
                        (selectedLevel === 'debutant' && formation.level === 'Débutant') ||
                        (selectedLevel === 'intermediaire' && formation.level === 'Intermédiaire') ||
                        (selectedLevel === 'avance' && formation.level === 'Avancé') ||
                        (selectedLevel === 'debutant' && formation.level === 'Tous niveaux');
    const matchesDuration = selectedDuration === 'all' || formation.durationType === selectedDuration;
    const matchesPrice = selectedPrice === 'all' || 
                        (selectedPrice === 'gratuit' && formation.isFree) ||
                        (selectedPrice === 'payant' && !formation.isFree);
    return matchesCategory && matchesSearch && matchesLevel && matchesDuration && matchesPrice;
  });

  const freeFormations = formations.filter(f => f.isFree);

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-light">
        {/* Hero Section */}
        <section className="pt-56 pb-16 bg-light">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-dark mb-4">
                Développez des compétences qui vous rapportent
              </h1>
              <p className="text-2xl text-gray-600 mb-8">
                Choisissez une formation adaptée à votre niveau et transformez vos ambitions en revenus concrets
              </p>
              
              {/* Search Bar */}
              <div className="max-w-xl mx-auto relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Rechercher une formation..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-full border-2 border-gray-200 focus:outline-none focus:border-primary text-dark"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-6 bg-white border-b sticky top-20 z-40">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center gap-2 text-gray-600">
                <Filter size={20} />
                <span className="font-medium">Filtres :</span>
              </div>
              
              {/* Level Filter */}
              <select 
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-primary"
              >
                {levels.map(level => (
                  <option key={level.id} value={level.id}>{level.name}</option>
                ))}
              </select>

              {/* Duration Filter */}
              <select 
                value={selectedDuration}
                onChange={(e) => setSelectedDuration(e.target.value)}
                className="px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-primary"
              >
                {durations.map(duration => (
                  <option key={duration.id} value={duration.id}>{duration.name}</option>
                ))}
              </select>

              {/* Price Filter */}
              <select 
                value={selectedPrice}
                onChange={(e) => setSelectedPrice(e.target.value)}
                className="px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-primary"
              >
                {prices.map(price => (
                  <option key={price.id} value={price.id}>{price.name}</option>
                ))}
              </select>

              {(selectedLevel !== 'all' || selectedDuration !== 'all' || selectedPrice !== 'all') && (
                <button 
                  onClick={() => {
                    setSelectedLevel('all');
                    setSelectedDuration('all');
                    setSelectedPrice('all');
                  }}
                  className="text-primary hover:underline text-sm"
                >
                  Réinitialiser
                </button>
              )}
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

        {/* Free Formations Banner */}
        {activeCategory === 'all' && (
          <section className="py-8 bg-gradient-to-r from-primary to-blue-600">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                    <Sparkles className="text-white" size={32} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">Formations gratuites</h2>
                    <p className="text-white/90">Commencez dès maintenant sans payer</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  {freeFormations.slice(0, 3).map(formation => (
                    <Link
                      key={formation.id}
                      href={`/formations/${formation.id}`}
                      className="px-4 py-2 bg-white text-green-600 rounded-full font-medium hover:bg-gray-100 transition-colors"
                    >
                      {formation.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Formations Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-dark">
                {activeCategory === 'all' ? 'Toutes nos formations' : categories.find(c => c.id === activeCategory)?.name}
                <span className="text-gray-500 font-normal ml-2">({filteredFormations.length})</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredFormations.map((formation) => (
                <div key={formation.id} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  {/* Image */}
                  <div className="relative h-48 bg-gray-100">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                      <BookOpen size={48} />
                    </div>
                    {formation.badge && (
                      <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-medium ${
                        formation.badge === 'La plus suivie' ? 'bg-yellow-500 text-white' :
                        formation.badge === 'Très demandée' ? 'bg-orange-500 text-white' :
                        'bg-blue-500 text-white'
                      }`}>
                        {formation.badge}
                      </div>
                    )}
                    {formation.isFree && (
                      <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                        <DollarSign size={14} />
                        Gratuit
                      </div>
                    )}
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

                    {/* Instructor & Certificate */}
                    <div className="flex items-center justify-between text-sm mb-4">
                      <span className="text-gray-600">Par {formation.instructor}</span>
                      {formation.hasCertificate && (
                        <span className="flex items-center gap-1 text-green-600">
                          <Award size={16} />
                          Certificat
                        </span>
                      )}
                    </div>

                    {/* Price & CTA */}
                    <div className="flex items-center justify-between pt-4 border-t">
                      <div>
                        {formation.isFree ? (
                          <span className="text-2xl font-bold text-primary">Gratuit</span>
                        ) : (
                          <span className="text-2xl font-bold text-primary">{formation.price.toLocaleString()} Fcfa</span>
                        )}
                      </div>
                      <Link
                        href={`/formations/${formation.id}`}
                        className="flex items-center gap-2 px-4 py-2 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors"
                      >
                        S'inscrire
                        <ChevronRight size={18} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredFormations.length === 0 && (
              <div className="text-center py-16">
                <BookOpen size={64} className="mx-auto text-gray-300 mb-4" />
                <h3 className="text-xl font-semibold text-dark mb-2">Aucune formation trouvée</h3>
                <p className="text-gray-600">Essayez avec d'autres filtres ou mots-clés.</p>
              </div>
            )}
          </div>
        </section>

        {/* Testimonials Section */}
        <PartnersSection />

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
