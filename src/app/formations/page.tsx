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
  Sparkles,
  Languages,
  Laptop,
  Briefcase,
  Heart,
  GraduationCap,
  Target,
  Globe,
  Mic,
  PenTool,
  Headphones,
  Code,
  FileText,
  Mail,
  Presentation,
  UserCheck,
  Calendar,
  Rocket,
  Banknote,
  UsersRound,
  Accessibility,
  Wifi,
  Download,
  Building2,
  PiggyBank,
  TrendingUp,
  UserPlus
} from 'lucide-react';

export default function FormationsPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'Toutes les formations' },
    { id: 'anglais', name: 'Anglais' },
    { id: 'techniques', name: 'Compétences Techniques' },
    { id: 'employabilite', name: 'Employabilité' },
    { id: 'stem', name: 'STEM' },
    { id: 'inclusion', name: 'Inclusion' },
    { id: 'communaute', name: 'Éducation Communautaire' },
    { id: 'ope', name: 'Programme OPE' },
  ];

  const formations = [
    // ANGLAIS
    {
      id: 1,
      title: 'Anglais : Les fondamentaux qui ouvrent les portes',
      category: 'anglais',
      subcategory: 'Anglais',
      description: 'Compétences de base et fondamentaux en langue anglaise pour communiquer avec confiance.',
      duration: '8 semaines',
      durationType: 'moyenne',
      students: 1250,
      level: 'Débutant',
      price: 25000,
      isFree: false,
      instructor: 'Équipe Wurami',
      hasCertificate: true,
      badge: 'La plus populaire',
      objectives: [
        'Maîtriser la grammaire essentielle simplifiée',
        'Acquérir un vocabulaire professionnel',
        'Développer l\'expression orale guidée',
        'Utiliser les supports interactifs (quiz, audio, exercices)'
      ],
      skills: ['Grammaire', 'Vocabulaire professionnel', 'Expression orale', 'Anglais business'],
      icon: Languages,
      features: ['Grammaire essentielle simplifiée', 'Vocabulaire professionnel', 'Expression orale guidée', 'Supports interactifs', 'Anglais orienté carrière']
    },
    // COMPÉTENCES TECHNIQUES
    {
      id: 2,
      title: 'Introduction au design & à la rédaction web',
      category: 'techniques',
      subcategory: 'Design & Web',
      description: 'Bases du graphisme, création de visuels professionnels et rédaction web persuasive.',
      duration: '6 semaines',
      durationType: 'moyenne',
      students: 850,
      level: 'Débutant',
      price: 20000,
      isFree: false,
      instructor: 'Équipe Wurami',
      hasCertificate: true,
      badge: 'Très demandée',
      objectives: [
        'Maîtriser les bases du graphisme',
        'Créer des visuels professionnels',
        'Rédiger pour le web de manière persuasive',
        'Utiliser les outils digitaux modernes'
      ],
      skills: ['Graphisme', 'Canva', 'Rédaction web', 'Outils digitaux'],
      icon: PenTool,
      features: ['Bases du graphisme', 'Création de visuels professionnels', 'Rédaction web persuasive', 'Introduction aux outils digitaux']
    },
    {
      id: 3,
      title: 'Compétences numériques de base',
      category: 'techniques',
      subcategory: 'Bureautique',
      description: 'Bureautique, navigation sécurisée et organisation numérique pour devenir opérationnel.',
      duration: '4 semaines',
      durationType: 'courte',
      students: 1100,
      level: 'Débutant',
      price: 15000,
      isFree: false,
      instructor: 'Équipe Wurami',
      hasCertificate: true,
      badge: null,
      objectives: [
        'Maîtriser Word, Excel et PowerPoint',
        'Naviguer en sécurité sur internet',
        'Effectuer des recherches efficaces en ligne',
        'S\'organiser numériquement'
      ],
      skills: ['Word', 'Excel', 'PowerPoint', 'Navigation sécurisée'],
      icon: Laptop,
      features: ['Bureautique (Word, Excel, PowerPoint)', 'Navigation sécurisée', 'Recherche efficace en ligne', 'Organisation numérique']
    },
    // EMPLOIABILITÉ
    {
      id: 4,
      title: 'Métiers du numérique',
      category: 'employabilite',
      subcategory: 'Métiers numériques',
      description: 'Introduction à l\'UX/UI, marketing digital et création de présence en ligne.',
      duration: '10 semaines',
      durationType: 'longue',
      students: 720,
      level: 'Intermédiaire',
      price: 35000,
      isFree: false,
      instructor: 'Équipe Wurami',
      hasCertificate: true,
      badge: 'Nouvelle',
      objectives: [
        'Découvrir l\'UX/UI design',
        'Maîtriser le marketing digital',
        'Créer une présence en ligne professionnelle',
        'Développer son réseau professionnel'
      ],
      skills: ['UX/UI', 'Marketing digital', 'Présence en ligne', 'Réseaux professionnels'],
      icon: Code,
      features: ['Introduction UX / UI', 'Marketing digital', 'Création de présence en ligne']
    },
    {
      id: 5,
      title: 'Développement professionnel',
      category: 'employabilite',
      subcategory: 'Développement pro',
      description: 'Rédaction de CV stratégique, préparation aux entretiens et soft skills essentiels.',
      duration: '4 semaines',
      durationType: 'courte',
      students: 950,
      level: 'Tous niveaux',
      price: 0,
      isFree: true,
      instructor: 'Équipe Wurami',
      hasCertificate: true,
      badge: 'Gratuite',
      objectives: [
        'Rédiger un CV stratégique',
        'Se préparer aux entretiens d\'embauche',
        'Développer les soft skills',
        'Améliorer sa communication'
      ],
      skills: ['CV', 'Entretien', 'Communication', 'Leadership'],
      icon: UserCheck,
      features: ['Rédaction de CV stratégique', 'Préparation aux entretiens', 'Soft skills (communication, leadership, gestion du stress)']
    },
    {
      id: 6,
      title: 'Orientation carrière & entrepreneuriat',
      category: 'employabilite',
      subcategory: 'Carrière',
      description: 'Identifier son profil, construire un plan de carrière et lancer un projet.',
      duration: '6 semaines',
      durationType: 'moyenne',
      students: 680,
      level: 'Tous niveaux',
      price: 20000,
      isFree: false,
      instructor: 'Équipe Wurami',
      hasCertificate: true,
      badge: null,
      objectives: [
        'Identifier son profil professionnel',
        'Construire un plan de carrière',
        'Lancer un projet entrepreneurial',
        'Développer son réseau'
      ],
      skills: ['Orientation', 'Plan de carrière', 'Entrepreneuriat', 'Réseau'],
      icon: Target,
      features: ['Identifier son profil', 'Construire un plan de carrière', 'Lancer un projet']
    },
    // STEM
    {
      id: 7,
      title: 'STEM & Apprentissage innovant',
      category: 'stem',
      subcategory: 'STEM',
      description: 'Modules interactifs en sciences, technologie, ingénierie et mathématiques pour développer l\'esprit critique.',
      duration: '12 semaines',
      durationType: 'longue',
      students: 450,
      level: 'Tous niveaux',
      price: 30000,
      isFree: false,
      instructor: 'Équipe Wurami',
      hasCertificate: true,
      badge: 'Innovant',
      objectives: [
        'Découvrir les sciences et technologies',
        'S\'initier à l\'ingénierie',
        'Maîtriser les mathématiques appliquées',
        'Développer l\'esprit critique et l\'innovation'
      ],
      skills: ['Sciences', 'Technologie', 'Ingénierie', 'Mathématiques'],
      icon: Sparkles,
      features: ['Modules interactifs en sciences, technologie, ingénierie et mathématiques', 'Simulations éducatives', 'Expérimentations virtuelles', 'Résolution de problèmes concrets']
    },
    // INCLUSION
    {
      id: 8,
      title: 'Inclusion & accès élargi',
      category: 'inclusion',
      subcategory: 'Inclusion',
      description: 'Cours accessibles aux personnes malentendantes et contenus adaptés aux zones à faible connectivité.',
      duration: 'Flexible',
      durationType: 'courte',
      students: 320,
      level: 'Tous niveaux',
      price: 0,
      isFree: true,
      instructor: 'Équipe Wurami',
      hasCertificate: true,
      badge: 'Accessible',
      objectives: [
        'Accéder à des cours adaptés aux personnes malentendantes',
        'Profiter de contenus en faible connectivité',
        'Télécharger les supports',
        'Combiner numérique et présentiel'
      ],
      skills: ['Accessibilité', 'Apprentissage hybride', 'Autoformation'],
      icon: Accessibility,
      features: ['Cours accessibles aux personnes malentendantes', 'Contenus adaptés aux zones à faible connectivité', 'Supports téléchargeables', 'Apprentissage hybride']
    },
    // ÉDUCATION COMMUNAUTAIRE
    {
      id: 9,
      title: 'Formation pour adultes',
      category: 'communaute',
      subcategory: 'Adultes',
      description: 'Finance personnelle et stratégies pour trouver un emploi.',
      duration: '6 semaines',
      durationType: 'moyenne',
      students: 580,
      level: 'Tous niveaux',
      price: 15000,
      isFree: false,
      instructor: 'Équipe Wurami',
      hasCertificate: true,
      badge: null,
      objectives: [
        'Maîtriser la finance personnelle',
        'Développer des stratégies de recherche d\'emploi',
        'Gérer son budget',
        'Planifier son avenir financier'
      ],
      skills: ['Finance', 'Budget', 'Recherche emploi', 'Planification'],
      icon: PiggyBank,
      features: ['Finance personnelle', 'Stratégies pour trouver un emploi']
    },
    {
      id: 10,
      title: 'Éducation financière & entrepreneuriale pour jeunes',
      category: 'communaute',
      subcategory: 'Jeunes',
      description: 'Comprendre l\'argent, construire un projet et préparer une levée de fonds.',
      duration: '8 semaines',
      durationType: 'moyenne',
      students: 420,
      level: 'Débutant',
      price: 20000,
      isFree: false,
      instructor: 'Équipe Wurami',
      hasCertificate: true,
      badge: 'Pour les jeunes',
      objectives: [
        'Comprendre le fonctionnement de l\'argent',
        'Construire un projet entrepreneurial',
        'Préparer une levée de fonds',
        'Développer une mentalidad financière'
      ],
      skills: ['Finance', 'Entrepreneuriat', 'Levée de fonds', 'Gestion de projet'],
      icon: TrendingUp,
      features: ['Comprendre l\'argent', 'Construire un projet', 'Préparer une levée de fonds']
    },
    // PROGRAMME OPE
    {
      id: 11,
      title: 'Programme OPE – Obtenir mon Premier Emploi',
      category: 'ope',
      subcategory: 'Programme OPE',
      description: 'Un programme structuré pour décrocher son premier emploi.',
      duration: '10 semaines',
      durationType: 'longue',
      students: 890,
      level: 'Débutant',
      price: 35000,
      isFree: false,
      instructor: 'Équipe Wurami',
      hasCertificate: true,
      badge: 'Le plus suivi',
      objectives: [
        'Clarifier son positionnement professionnel',
        'Construire un CV stratégique',
        'Maîtriser l\'entretien d\'embauche',
        'Développer un réseau professionnel',
        'Décrocher son premier contrat'
      ],
      skills: ['Positionnement', 'CV', 'Entretien', 'Réseau', 'Prospection'],
      icon: Rocket,
      features: ['Clarifier son positionnement', 'Construire un CV stratégique', 'Maîtriser l\'entretien', 'Développer un réseau', 'Décrocher son premier contrat']
    },
  ];

  const filteredFormations = formations.filter(formation => {
    const matchesCategory = activeCategory === 'all' || formation.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      formation.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      formation.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Navigation />
      {/* Hero Section */}
      <section className="pt-56 pb-16 bg-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-dark mb-6">
              Nos Formations
            </h1>
            <p className="text-2xl text-gray-600 mb-8">
              Apprenez. Transformez-vous. Obtenez des résultats concrets.
            </p>
            
            {/* Search */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Rechercher une formation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2 rounded-full font-medium transition-all ${
                  activeCategory === cat.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Formations Grid */}
      <section className="py-16 bg-light">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredFormations.map((formation) => (
              <div key={formation.id} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden group">
                {/* Image placeholder with icon */}
                <div className="h-48 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center relative overflow-hidden">
                  <formation.icon size={64} className="text-white/30 absolute" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all" />
                  {formation.badge && (
                    <span className="absolute top-4 right-4 bg-white/90 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                      {formation.badge}
                    </span>
                  )}
                  {formation.isFree && (
                    <span className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Gratuit
                    </span>
                  )}
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 text-lg font-medium text-blue-600 mb-3">
                    <formation.icon size={20} />
                    <span>{formation.subcategory}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-dark mb-3 group-hover:text-blue-600 transition-colors">
                    {formation.title}
                  </h3>
                  
                  <p className="text-gray-600 text-lg mb-5 line-clamp-3">
                    {formation.description}
                  </p>
                  
                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {formation.features.slice(0, 3).map((feature, idx) => (
                      <span key={idx} className="text-sm bg-gray-100 text-gray-600 px-3 py-1.5 rounded-lg">
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  {/* Meta */}
                  <div className="flex items-center justify-between text-lg text-gray-500 mb-5 pt-4 border-t">
                    <div className="flex items-center gap-2">
                      <Clock size={20} />
                      <span>{formation.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users size={20} />
                      <span>{formation.students} eleves</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award size={20} />
                      <span>{formation.level}</span>
                    </div>
                  </div>
                  
                  {/* Price & CTA */}
                  <div className="flex items-center justify-between">
                    <div>
                      {formation.isFree ? (
                        <span className="text-2xl font-bold text-green-600">Gratuit</span>
                      ) : (
                        <span className="text-2xl font-bold text-blue-600">{formation.price.toLocaleString()} XOF</span>
                      )}
                    </div>
                    <Link 
                      href={`/formations/${formation.id}`}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Voir plus
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredFormations.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">Aucune formation ne correspond a votre recherche.</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <p className="text-4xl font-bold mb-2">5,000+</p>
              <p className="text-blue-100">Apprenants</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">13</p>
              <p className="text-blue-100">Formations</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">12</p>
              <p className="text-blue-100">Certifications</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">95%</p>
              <p className="text-blue-100">Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
