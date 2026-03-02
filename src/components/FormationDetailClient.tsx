'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  Clock, 
  Users, 
  BookOpen, 
  Award, 
  CheckCircle, 
  Play, 
  ChevronRight,
  DollarSign,
  GraduationCap,
  Target,
  FileText,
  Calendar,
  Star
} from 'lucide-react';

// Données des formations (sera remplacé par API/database)
const formationsData: Record<string, {
  id: number;
  title: string;
  category: string;
  subcategory: string;
  description: string;
  longDescription: string;
  duration: string;
  durationType: string;
  students: number;
  level: string;
  price: number;
  isFree: boolean;
  instructor: string;
  hasCertificate: boolean;
  badge: string | null;
  objectives: string[];
  skills: string[];
  modules: { title: string; lessons: number; duration: string }[];
  evaluation: string;
  format: string;
}> = {
  '1': {
    id: 1,
    title: 'Marketing Digital',
    category: 'digital',
    subcategory: 'Marketing digital',
    description: 'Maîtrisez les stratégies de marketing digital pour promouvoir vos produits et services en ligne.',
    longDescription: 'Cette formation complète vous permettra d\'acquérir toutes les compétences nécessaires pour devenir un expert en marketing digital. Vous apprendrez à créer des stratégies efficaces, à gérer des campagnes publicitaires, et à analyser les performances de vos actions.',
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
    skills: ['SEO', 'Google Ads', 'Facebook Ads', 'Analytics', 'Email Marketing'],
    modules: [
      { title: 'Introduction au Marketing Digital', lessons: 4, duration: '4h' },
      { title: 'SEO et Référencement', lessons: 6, duration: '8h' },
      { title: 'Publicité en Ligne (Google Ads)', lessons: 8, duration: '10h' },
      { title: 'Réseaux Sociaux et Publicité', lessons: 6, duration: '8h' },
      { title: 'Email Marketing', lessons: 4, duration: '5h' },
      { title: 'Analytics et Mesure', lessons: 5, duration: '6h' },
    ],
    evaluation: 'Projet pratique + Quiz',
    format: 'En ligne + Sessions live'
  },
  '2': {
    id: 2,
    title: 'Community Management',
    category: 'digital',
    subcategory: 'Community management',
    description: 'Apprenez à gérer efficacement la présence de votre marque sur les réseaux sociaux.',
    longDescription: 'Devenez un expert en gestion de communauté et créez une présence en ligne engageante pour votre marque.',
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
    skills: ['Facebook', 'Instagram', 'LinkedIn', 'Twitter', 'Gestion de communauté'],
    modules: [
      { title: 'Fondamentaux du Community Management', lessons: 4, duration: '4h' },
      { title: 'Stratégie de Contenu', lessons: 5, duration: '6h' },
      { title: 'Gestion des Réseaux Sociaux', lessons: 6, duration: '8h' },
      { title: 'Engagement et Interaction', lessons: 4, duration: '5h' },
      { title: 'Mesure de Performance', lessons: 4, duration: '5h' },
    ],
    evaluation: 'Portfolio de contenu',
    format: 'En ligne'
  },
  '3': {
    id: 3,
    title: 'Introduction à l\'Intelligence Artificielle',
    category: 'digital',
    subcategory: 'IA & outils modernes',
    description: 'Découvrez comment utiliser l\'IA et les outils modernes pour booster votre productivité.',
    longDescription: 'Initiez-vous au monde de l\'Intelligence Artificielle et apprenez à utiliser les outils IA pour améliorer votre productivité quotidienne.',
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
    skills: ['IA', 'ChatGPT', 'Automatisation', 'Outils productivity'],
    modules: [
      { title: 'Introduction à l\'IA', lessons: 3, duration: '3h' },
      { title: 'ChatGPT et Assistants IA', lessons: 5, duration: '6h' },
      { title: 'Automatisation avec IA', lessons: 4, duration: '5h' },
      { title: 'Projets Pratiques', lessons: 3, duration: '4h' },
    ],
    evaluation: 'Quiz + Projet pratique',
    format: 'En ligne'
  },
  '4': {
    id: 4,
    title: 'Compétences Numériques Professionnelles',
    category: 'digital',
    subcategory: 'Compétences numériques',
    description: 'Acquérez les compétences numériques essentielles pour le monde professionnel.',
    longDescription: 'Maîtrisez les outils numériques indispensables pour votre carrière professionnelle.',
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
    skills: ['Word', 'Excel', 'PowerPoint', 'Google Workspace', 'Teams'],
    modules: [
      { title: 'Word Avancé', lessons: 6, duration: '8h' },
      { title: 'Excel Avancé', lessons: 8, duration: '12h' },
      { title: 'PowerPoint Professionnel', lessons: 5, duration: '6h' },
      { title: 'Google Workspace', lessons: 4, duration: '5h' },
      { title: 'Outils de Collaboration', lessons: 4, duration: '5h' },
    ],
    evaluation: 'Tests pratiques',
    format: 'En ligne + Accompagnement'
  },
  '5': {
    id: 5,
    title: 'Création d\'Entreprise',
    category: 'entrepreneuriat',
    subcategory: 'Création d\'entreprise',
    description: 'Transformez votre idée en entreprise rentable. De l\'idée à la concrétisation.',
    longDescription: 'Apprenez à transformer une idée en entreprise viable avec ce parcours complet.',
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
    skills: ['Business Model', 'Business Plan', 'Finance', 'Stratégie'],
    modules: [
      { title: 'Idée et Validation', lessons: 4, duration: '5h' },
      { title: 'Business Model Canvas', lessons: 5, duration: '6h' },
      { title: 'Étude de Marché', lessons: 6, duration: '8h' },
      { title: 'Business Plan', lessons: 8, duration: '10h' },
      { title: 'Financement', lessons: 5, duration: '6h' },
      { title: 'Légalité et Formalités', lessons: 4, duration: '5h' },
    ],
    evaluation: 'Projet complet (Business Plan)',
    format: 'En ligne + Accompagnement'
  },
  '6': {
    id: 6,
    title: 'Gestion Financière',
    category: 'entrepreneuriat',
    subcategory: 'Gestion financière',
    description: 'Apprenez à gérer les finances de votre entreprise efficacement.',
    longDescription: 'Maîtrisez la gestion financière de votre entreprise pour assurer sa rentabilité.',
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
    skills: ['Comptabilité', 'Trésorerie', 'Budget', 'Finance'],
    modules: [
      { title: 'Fondamentaux de la Comptabilité', lessons: 5, duration: '6h' },
      { title: 'Gestion de Trésorerie', lessons: 6, duration: '8h' },
      { title: 'Analyse Financière', lessons: 6, duration: '8h' },
      { title: 'Budget et Prévision', lessons: 5, duration: '6h' },
    ],
    evaluation: 'Cas pratiques',
    format: 'En ligne'
  },
  '7': {
    id: 7,
    title: 'E-commerce',
    category: 'entrepreneuriat',
    subcategory: 'E-commerce',
    description: 'Créez et gérez votre boutique en ligne pour vendre vos produits.',
    longDescription: 'Lancez votre activité e-commerce et apprenez à gérer une boutique en ligne.',
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
    skills: ['WooCommerce', 'Shopify', 'Marketing digital', 'Logistique'],
    modules: [
      { title: 'Choix de la Plateforme', lessons: 3, duration: '4h' },
      { title: 'Création de la Boutique', lessons: 5, duration: '6h' },
      { title: 'Gestion des Produits', lessons: 4, duration: '5h' },
      { title: 'Paiement et Logistique', lessons: 5, duration: '6h' },
      { title: 'Marketing E-commerce', lessons: 5, duration: '6h' },
    ],
    evaluation: 'Projet boutique en ligne',
    format: 'En ligne'
  },
  '8': {
    id: 8,
    title: 'Transformation Agroalimentaire',
    category: 'agribusiness',
    subcategory: 'Transformation agroalimentaire',
    description: 'Apprenez à transformer les produits agricoles pour augmenter leur valeur.',
    longDescription: 'Développez vos compétences en transformation alimentaire pour valoriser vos productions.',
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
    skills: ['Transformation', 'Hygiène', 'Emballage', 'Valorisation'],
    modules: [
      { title: 'Introduction à la Transformation', lessons: 4, duration: '5h' },
      { title: 'Techniques de Conservation', lessons: 6, duration: '8h' },
      { title: 'Normes d\'Hygiène', lessons: 5, duration: '6h' },
      { title: 'Emballage et Étiquetage', lessons: 4, duration: '5h' },
      { title: 'Commercialisation', lessons: 5, duration: '6h' },
    ],
    evaluation: 'Projet pratique',
    format: 'En ligne + Ateliers pratiques'
  },
  '9': {
    id: 9,
    title: 'Commercialisation Agricole',
    category: 'agribusiness',
    subcategory: 'Commercialisation locale',
    description: 'Découvrez comment commercialiser vos produits agricoles efficacement.',
    longDescription: 'Apprenez les stratégies de commercialisation pour maximiser vos revenus agricoles.',
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
    skills: ['Marketing', 'Négociation', 'Distribution', 'Prix'],
    modules: [
      { title: 'Connaissance des Marchés', lessons: 4, duration: '5h' },
      { title: 'Stratégies de Commercialisation', lessons: 5, duration: '6h' },
      { title: 'Négociation', lessons: 4, duration: '5h' },
      { title: 'Distribution', lessons: 4, duration: '5h' },
    ],
    evaluation: 'Quiz + Étude de cas',
    format: 'En ligne'
  },
  '10': {
    id: 10,
    title: 'Gestion d\'Activité Agricole',
    category: 'agribusiness',
    subcategory: 'Gestion d\'activité agricole',
    description: 'Gérez votre exploitation agricole comme une véritable entreprise.',
    longDescription: 'Transformez votre exploitation en entreprise agricole performante.',
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
    skills: ['Planning', 'Gestion', 'Productivité', 'Rentabilité'],
    modules: [
      { title: 'Planification', lessons: 5, duration: '6h' },
      { title: 'Gestion des Intrants', lessons: 5, duration: '6h' },
      { title: 'Suivi de Production', lessons: 6, duration: '8h' },
      { title: 'Analyse de Rentabilité', lessons: 5, duration: '6h' },
    ],
    evaluation: 'Projet de gestion',
    format: 'En ligne'
  },
  '11': {
    id: 11,
    title: 'Prise de Parole en Public',
    category: 'leadership',
    subcategory: 'Prise de parole',
    description: 'Maîtrisez l\'art de parler en public et captiverez votre audience.',
    longDescription: 'Développez vos compétences oratoires pour devenir un excellent communicant.',
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
    skills: ['Expression', 'Rhétorique', 'Confiance', 'Gestuelle'],
    modules: [
      { title: 'Gestion du Trac', lessons: 3, duration: '3h' },
      { title: 'Structure du Discours', lessons: 4, duration: '4h' },
      { title: 'Techniques de Communication', lessons: 5, duration: '5h' },
      { title: 'Pratique', lessons: 4, duration: '4h' },
    ],
    evaluation: 'Vidéo de pratique',
    format: 'En ligne'
  },
  '12': {
    id: 12,
    title: 'Confiance en Soi',
    category: 'leadership',
    subcategory: 'Confiance en soi',
    description: 'Développez votre confiance en vous pour atteindre vos objectifs.',
    longDescription: 'Renforcez votre confiance en vous grâce à des techniques éprouvées.',
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
      'Mindset positif'
    ],
    skills: ['Estime de soi', 'Affirmation', 'Stress management', 'Positive thinking'],
    modules: [
      { title: 'Connaissance de Soi', lessons: 3, duration: '3h' },
      { title: 'Estime de Soi', lessons: 4, duration: '4h' },
      { title: 'Gestion du Stress', lessons: 4, duration: '4h' },
    ],
    evaluation: 'Journal personnel',
    format: 'En ligne'
  },
  '13': {
    id: 13,
    title: 'Discipline & Productivité',
    category: 'leadership',
    subcategory: 'Discipline & productivité',
    description: 'Apprenez à être plus productif et à gérer votre temps efficacement.',
    longDescription: 'Maîtrisez votre temps et augmentez votre productivité au quotidien.',
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
      'Méthodes de productivité',
      'Évitement des distractions',
      'Équilibre vie pro/perso'
    ],
    skills: ['Time management', 'Productivité', 'Organisation', 'Discipline'],
    modules: [
      { title: 'Fondamentaux du Temps', lessons: 3, duration: '3h' },
      { title: 'Méthodes de Productivité', lessons: 5, duration: '6h' },
      { title: 'Focus et Concentration', lessons: 4, duration: '4h' },
      { title: 'Équilibre de Vie', lessons: 3, duration: '3h' },
    ],
    evaluation: 'Plan d\'action personnel',
    format: 'En ligne'
  },
};

export default function FormationDetailClient() {
  const params = useParams();
  const id = params?.id as string;
  const formation = formationsData[id];

  if (!formation) {
    return (
      <>
        <Navigation />
        <main className="min-h-screen pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">
                Formation non trouvée
              </h1>
              <Link href="/formations" className="text-primary hover:underline">
                Retour aux formations
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-light">
        {/* Hero Section */}
        <section className="pt-40 pb-16 bg-gradient-to-br from-primary to-blue-600">
          <div className="container mx-auto px-4">
            <Link 
              href="/formations" 
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8"
            >
              <ChevronRight className="rotate-180" size={20} />
              Retour aux formations
            </Link>
            
            <div className="grid lg:grid-cols-3-start">
              <div className=" gap-8 itemslg:col-span-2">
                {formation.badge && (
                  <span className="inline-block px-3 py-1 bg-white/20 text-white text-sm font-medium rounded-full mb-4">
                    {formation.badge}
                  </span>
                )}
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  {formation.title}
                </h1>
                <p className="text-xl text-white/90 mb-6">
                  {formation.longDescription}
                </p>
                
                <div className="flex flex-wrap gap-6 text-white/80">
                  <div className="flex items-center gap-2">
                    <Clock size={20} />
                    <span>{formation.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={20} />
                    <span>{formation.students} apprenants</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Target size={20} />
                    <span>{formation.level}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen size={20} />
                    <span>{formation.format}</span>
                  </div>
                </div>
              </div>
              
              {/* Card */}
              <div className="bg-white rounded-2xl p-6 shadow-xl">
                {formation.isFree ? (
                  <div className="text-3xl font-bold text-green-600 mb-4">
                    Gratuit
                  </div>
                ) : (
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-primary">
                      {formation.price.toLocaleString()} CFA
                    </span>
                  </div>
                )}
                
                <button className="w-full bg-primary text-white py-4 rounded-xl font-semibold text-lg mb-4 hover:bg-blue-600 transition-colors">
                  {formation.isFree ? 'Commencer maintenant' : 'S\'inscrire'}
                </button>
                
                <p className="text-center text-gray-500 text-sm mb-6">
                  Formation certifiante
                </p>
                
                <div className="border-t pt-4">
                  <h4 className="font-semibold text-gray-800 mb-3">Cette formation inclut :</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-gray-600">
                      <CheckCircle size={18} className="text-green-500" />
                      Accès à vie
                    </li>
                    <li className="flex items-center gap-2 text-gray-600">
                      <CheckCircle size={18} className="text-green-500" />
                      {formation.modules.length} modules
                    </li>
                    <li className="flex items-center gap-2 text-gray-600">
                      <CheckCircle size={18} className="text-green-500" />
                      {formation.evaluation}
                    </li>
                    {formation.hasCertificate && (
                      <li className="flex items-center gap-2 text-gray-600">
                        <Award size={18} className="text-yellow-500" />
                        Certificat de fin de formation
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contenu */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-12">
                {/* Objectifs */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    Objectifs de la formation
                  </h2>
                  <ul className="space-y-3">
                    {formation.objectives.map((obj, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle size={20} className="text-primary mt-1 flex-shrink-0" />
                        <span className="text-gray-600">{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Compétences */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    Compétences acquises
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {formation.skills.map((skill, index) => (
                      <span 
                        key={index}
                        className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Programme */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    Programme de la formation
                  </h2>
                  <div className="space-y-4">
                    {formation.modules.map((module, index) => (
                      <div 
                        key={index}
                        className="bg-white border border-gray-200 rounded-xl p-4 hover:border-primary transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary font-bold">
                              {index + 1}
                            </div>
                            <div>
                              <h3 className="font-semibold text-gray-800">
                                {module.title}
                              </h3>
                              <p className="text-sm text-gray-500">
                                {module.lessons} leçons • {module.duration}
                              </p>
                            </div>
                          </div>
                          <Play size={20} className="text-gray-400" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Sidebar */}
              <div className="space-y-6">
                {/* Instructor */}
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h3 className="font-semibold text-gray-800 mb-4">Votre formateur</h3>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary text-xl font-bold">
                      {formation.instructor.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">{formation.instructor}</p>
                      <p className="text-sm text-gray-500">Expert {formation.category}</p>
                    </div>
                  </div>
                </div>
                
                {/* Évaluation */}
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h3 className="font-semibold text-gray-800 mb-4">Évaluation</h3>
                  <div className="flex items-center gap-3 text-gray-600">
                    <FileText size={24} className="text-primary" />
                    <span>{formation.evaluation}</span>
                  </div>
                </div>
                
                {/* Format */}
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h3 className="font-semibold text-gray-800 mb-4">Format</h3>
                  <div className="flex items-center gap-3 text-gray-600">
                    <GraduationCap size={24} className="text-primary" />
                    <span>{formation.format}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-primary to-blue-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Prêt à commencer votre transformation ?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Rejoignez {formation.students}+ apprenants qui font déjà confiance à Win Academy
            </p>
            <button className="bg-white text-primary px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors">
              {formation.isFree ? 'Commencer gratuitement' : 'S\'inscrire maintenant'}
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
