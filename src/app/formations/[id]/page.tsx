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
    longDescription: 'Cette formation complète en marketing digital vous permettra d\'acquérir toutes les compétences nécessaires pour promouvoir efficacement votre entreprise en ligne. Vous apprendrez à utiliser les différents canaux du marketing digital, à créer des campagnes publicitaires performantes et à analyser les résultats.',
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
      'Analyser les performances avec des outils analytics',
      'Créer une stratégie de contenu efficace'
    ],
    skills: ['SEO', 'Google Ads', 'Facebook Ads', 'Analytics', 'Email Marketing', 'Content Marketing'],
    modules: [
      { title: 'Introduction au Marketing Digital', lessons: 4, duration: '1 semaine' },
      { title: 'SEO et Référencement', lessons: 6, duration: '1.5 semaine' },
      { title: 'Publicité en Ligne', lessons: 5, duration: '1.5 semaine' },
      { title: 'Marketing de Contenu', lessons: 4, duration: '1 semaine' },
      { title: 'Analytics et Mesure', lessons: 4, duration: '1 semaine' },
      { title: 'Projet Final', lessons: 3, duration: '1 semaine' }
    ],
    evaluation: 'Projet pratique + Quiz final',
    format: 'En ligne'
  },
  '2': {
    id: 2,
    title: 'Community Management',
    category: 'digital',
    subcategory: 'Community management',
    description: 'Apprenez à gérer efficacement la présence de votre marque sur les réseaux sociaux.',
    longDescription: 'Devenez un community manager professionnel et maîtrisez tous les aspects de la gestion des réseaux sociaux pour une marque ou une entreprise.',
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
    skills: ['Facebook', 'Instagram', 'LinkedIn', 'Twitter', 'Gestion de communauté', ' Création de contenu'],
    modules: [
      { title: 'Rôle du Community Manager', lessons: 3, duration: '1 semaine' },
      { title: 'Stratégie de Contenu', lessons: 5, duration: '1 semaine' },
      { title: 'Gestion des Réseaux', lessons: 6, duration: '1.5 semaine' },
      { title: 'Outils et Automation', lessons: 4, duration: '1 semaine' },
      { title: 'Mesure et Analyse', lessons: 4, duration: '1 semaine' }
    ],
    evaluation: 'Projet pratique',
    format: 'En ligne'
  },
  '3': {
    id: 3,
    title: 'Introduction à l\'Intelligence Artificielle',
    category: 'digital',
    subcategory: 'IA & outils modernes',
    description: 'Découvrez comment utiliser l\'IA et les outils modernes pour booster votre productivité.',
    longDescription: 'Initiez-vous à l\'Intelligence Artificielle et apprenez à utiliser les outils IA pour optimiser votre travail quotidien.',
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
    skills: ['IA', 'ChatGPT', 'Automatisation', 'Outils productivity', 'Prompt Engineering'],
    modules: [
      { title: 'Comprendre l\'IA', lessons: 3, duration: '1 semaine' },
      { title: 'ChatGPT et alternatives', lessons: 4, duration: '1 semaine' },
      { title: 'Automatisation avec IA', lessons: 4, duration: '1 semaine' },
      { title: 'Projet Pratique', lessons: 3, duration: '1 semaine' }
    ],
    evaluation: 'Quiz final',
    format: 'En ligne'
  },
  '4': {
    id: 4,
    title: 'Compétences Numériques Professionnelles',
    category: 'digital',
    subcategory: 'Compétences numériques',
    description: 'Acquérez les compétences numériques essentielles pour le monde professionnel.',
    longDescription: 'Maîtrisez tous les outils numériques essentiels au monde professionnel moderne.',
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
    skills: ['Word', 'Excel', 'PowerPoint', 'Google Workspace', 'Teams', 'Outlook'],
    modules: [
      { title: 'Environnement de Travail', lessons: 3, duration: '1 semaine' },
      { title: 'Word Avancé', lessons: 6, duration: '2 semaines' },
      { title: 'Excel Avancé', lessons: 8, duration: '3 semaines' },
      { title: 'PowerPoint Pro', lessons: 5, duration: '2 semaines' },
      { title: 'Outils Collaboratifs', lessons: 4, duration: '2 semaines' }
    ],
    evaluation: 'Tests pratiques + Projet final',
    format: 'En ligne'
  },
  '5': {
    id: 5,
    title: 'Création d\'Entreprise',
    category: 'entrepreneuriat',
    subcategory: 'Création d\'entreprise',
    description: 'Transformez votre idée en entreprise rentable. De l\'idée à la concrétisation.',
    longDescription: 'Cette formation complète vous guide pas à pas dans la création de votre entreprise au Bénin.',
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
    skills: ['Business Model', 'Business Plan', 'Finance', 'Stratégie', 'Pitch'],
    modules: [
      { title: 'Valider son Idée', lessons: 4, duration: '2 semaines' },
      { title: 'Business Model Canvas', lessons: 5, duration: '2 semaines' },
      { title: 'Étude de Marché', lessons: 5, duration: '2 semaines' },
      { title: 'Business Plan', lessons: 6, duration: '3 semaines' },
      { title: 'Financement', lessons: 4, duration: '2 semaines' },
      { title: 'Démarches Administratives', lessons: 3, duration: '1 semaine' }
    ],
    evaluation: 'Business plan complet',
    format: 'En ligne'
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
    skills: ['Comptabilité', 'Trésorerie', 'Budget', 'Finance', 'Logiciel comptable'],
    modules: [
      { title: 'Bases de la Comptabilité', lessons: 4, duration: '1 semaine' },
      { title: 'Gestion de Trésorerie', lessons: 5, duration: '2 semaines' },
      { title: 'Analyse Financière', lessons: 5, duration: '2 semaines' },
      { title: 'Budget et Prévision', lessons: 4, duration: '2 semaines' },
      { title: 'Outils et Logiciels', lessons: 3, duration: '1 semaine' }
    ],
    evaluation: 'Analyse financière complète',
    format: 'En ligne'
  },
  '7': {
    id: 7,
    title: 'E-commerce',
    category: 'entrepreneuriat',
    subcategory: 'E-commerce',
    description: 'Créez et gérez votre boutique en ligne pour vendre vos produits.',
    longDescription: 'Apprenez à créer et gérer une boutique en ligne performante.',
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
    skills: ['WooCommerce', 'Shopify', 'Marketing digital', 'Logistique', 'Paiement en ligne'],
    modules: [
      { title: 'Choix de la Plateforme', lessons: 3, duration: '1 semaine' },
      { title: 'Création de la Boutique', lessons: 5, duration: '1.5 semaine' },
      { title: 'Gestion des Produits', lessons: 4, duration: '1 semaine' },
      { title: 'Marketing E-commerce', lessons: 5, duration: '1.5 semaine' },
      { title: 'Logistique et Paiement', lessons: 3, duration: '1 semaine' }
    ],
    evaluation: 'Boutique en ligne fonctionnelle',
    format: 'En ligne'
  },
  '8': {
    id: 8,
    title: 'Transformation Agroalimentaire',
    category: 'agribusiness',
    subcategory: 'Transformation agroalimentaire',
    description: 'Apprenez à transformer les produits agricoles pour augmenter leur valeur.',
    longDescription: 'Maîtrisez les techniques de transformation agroalimentaire pour créer de la valeur ajoutée.',
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
    skills: ['Transformation', 'Hygiène', 'Emballage', 'Valorisation', 'Normes'],
    modules: [
      { title: 'Introduction à la Transformation', lessons: 3, duration: '1 semaine' },
      { title: 'Techniques de Base', lessons: 5, duration: '2 semaines' },
      { title: 'Normes d\'Hygiène', lessons: 4, duration: '1.5 semaine' },
      { title: 'Emballage et Conservation', lessons: 4, duration: '1.5 semaine' },
      { title: 'Commercialisation', lessons: 4, duration: '2 semaines' },
      { title: 'Projet Pratique', lessons: 4, duration: '2 semaines' }
    ],
    evaluation: 'Produit transformé + Dossier',
    format: 'En ligne + Atelier pratique'
  },
  '9': {
    id: 9,
    title: 'Commercialisation Agricole',
    category: 'agribusiness',
    subcategory: 'Commercialisation locale',
    description: 'Découvrez comment commercialiser vos produits agricoles efficacement.',
    longDescription: 'Apprenez les stratégies de commercialisation pour rentabiliser votre activité agricole.',
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
    skills: ['Marketing', 'Négociation', 'Distribution', 'Prix', 'Prospection'],
    modules: [
      { title: 'Marchés Agricoles', lessons: 3, duration: '1 semaine' },
      { title: 'Étude des Prix', lessons: 4, duration: '1 semaine' },
      { title: 'Négociation', lessons: 4, duration: '1.5 semaine' },
      { title: 'Canaux de Distribution', lessons: 4, duration: '1.5 semaine' },
      { title: 'Marketing Digital', lessons: 3, duration: '1 semaine' }
    ],
    evaluation: 'Plan commercial',
    format: 'En ligne'
  },
  '10': {
    id: 10,
    title: 'Gestion d\'Activité Agricole',
    category: 'agribusiness',
    subcategory: 'Gestion d\'activité agricole',
    description: 'Gérez votre exploitation agricole comme une véritable entreprise.',
    longDescription: 'Apprenez à gérer votre exploitation agricole de manière professionnelle et rentable.',
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
    skills: ['Planning', 'Gestion', 'Productivité', 'Rentabilité', 'Suivi'],
    modules: [
      { title: 'Gestion d\'Exploitation', lessons: 4, duration: '1 semaine' },
      { title: 'Planning des Cultures', lessons: 5, duration: '2 semaines' },
      { title: 'Gestion des Intrants', lessons: 4, duration: '1.5 semaine' },
      { title: 'Suivi et Contrôle', lessons: 4, duration: '1.5 semaine' },
      { title: 'Analyse de Rentabilité', lessons: 4, duration: '2 semaines' }
    ],
    evaluation: 'Plan de gestion',
    format: 'En ligne'
  },
  '11': {
    id: 11,
    title: 'Prise de Parole en Public',
    category: 'leadership',
    subcategory: 'Prise de parole',
    description: 'Maîtrisez l\'art de parler en public et captiverez votre audience.',
    longDescription: 'Devenez un orateur accompli et surmonter votre trac pour captiver votre audience.',
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
    skills: ['Expression', 'Rhétorique', 'Confiance', 'Gestuelle', 'Voix'],
    modules: [
      { title: 'Comprendre son Trac', lessons: 3, duration: '1 semaine' },
      { title: 'Techniques de Respiration', lessons: 3, duration: '1 semaine' },
      { title: 'Structure du Discours', lessons: 4, duration: '1 semaine' },
      { title: 'Pratique et Retours', lessons: 4, duration: '1 semaine' }
    ],
    evaluation: 'Exposé enregistré',
    format: 'En ligne'
  },
  '12': {
    id: 12,
    title: 'Confiance en Soi',
    category: 'leadership',
    subcategory: 'Confiance en soi',
    description: 'Développez votre confiance en vous pour atteindre vos objectifs.',
    longDescription: 'Transformez votre vie en développant une confiance inébranlable en vous.',
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
    skills: ['Estime de soi', 'Affirmation', 'Stress management', 'Positive thinking', 'Psychologie'],
    modules: [
      { title: 'Auto-diagnostic', lessons: 3, duration: '1 semaine' },
      { title: 'Techniques d\'Affirmation', lessons: 4, duration: '1 semaine' },
      { title: 'Gestion du Stress', lessons: 3, duration: '1 semaine' }
    ],
    evaluation: 'Journal de progression',
    format: 'En ligne'
  },
  '13': {
    id: 13,
    title: 'Discipline & Productivité',
    category: 'leadership',
    subcategory: 'Discipline & productivité',
    description: 'Apprenez à être plus productif et à gérer votre temps efficacement.',
    longDescription: 'Maîtrisez les techniques de productivité pour atteindre vos objectifs plus rapidement.',
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
    skills: ['Time management', 'Productivité', 'Organisation', 'Discipline', 'Focus'],
    modules: [
      { title: 'Diagnostic Personnel', lessons: 2, duration: '0.5 semaine' },
      { title: 'Techniques de Temps', lessons: 5, duration: '1 semaine' },
      { title: 'Productivité Avancée', lessons: 5, duration: '1.5 semaine' },
      { title: 'Équilibre de Vie', lessons: 3, duration: '1 semaine' }
    ],
    evaluation: 'Plan d\'action personnel',
    format: 'En ligne'
  },
};

export default function FormationDetailPage() {
  const params = useParams();
  const formationId = params.id as string;
  const formation = formationsData[formationId];

  if (!formation) {
    return (
      <>
        <Navigation />
        <main className="min-h-screen pt-40">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold text-dark mb-4">Formation non trouvée</h1>
            <p className="text-gray-600 mb-8">Cette formation n'existe pas.</p>
            <Link href="/formations" className="btn-primary">
              Voir toutes les formations
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const categoryNames: Record<string, string> = {
    digital: 'Formations Digitales',
    entrepreneuriat: 'Entrepreneuriat & Business',
    agribusiness: 'Agribusiness & Transformation',
    leadership: 'Leadership & Développement Personnel',
  };

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-light">
        {/* Hero */}
        <section className="pt-56 pb-16 bg-primary">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-white/20 text-white rounded-full text-sm">
                    {categoryNames[formation.category]}
                  </span>
                  <span className="px-3 py-1 bg-white/20 text-white rounded-full text-sm">
                    {formation.level}
                  </span>
                  {formation.isFree && (
                    <span className="px-3 py-1 bg-primary text-white rounded-full text-sm font-medium">
                      Gratuit
                    </span>
                  )}
                  {formation.badge && (
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      formation.badge === 'La plus suivie' ? 'bg-yellow-500 text-white' :
                      formation.badge === 'Très demandée' ? 'bg-orange-500 text-white' :
                      'bg-blue-500 text-white'
                    }`}>
                      {formation.badge}
                    </span>
                  )}
                </div>
                <h1 className="text-4xl font-bold text-white mb-4">{formation.title}</h1>
                <p className="text-xl text-white/90 mb-6">{formation.description}</p>
                
                <div className="flex flex-wrap gap-6 text-white/80 mb-8">
                  <div className="flex items-center gap-2">
                    <Clock size={20} />
                    <span>{formation.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={20} />
                    <span>{formation.students.toLocaleString()} apprenants</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award size={20} />
                    <span>{formation.hasCertificate ? 'Certificat inclus' : 'Sans certificat'}</span>
                  </div>
                </div>

                <Link 
                  href="/inscription" 
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary/90"
                >
                  S'inscrire maintenant
                  <ChevronRight size={20} />
                </Link>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-center mb-6">
                  {formation.isFree ? (
                    <span className="text-4xl font-bold text-green-600">Gratuit</span>
                  ) : (
                    <span className="text-4xl font-bold text-primary">{formation.price.toLocaleString()} Fcfa</span>
                  )}
                  {!formation.isFree && (
                    <p className="text-gray-500 text-sm mt-1">Paiement unique</p>
                  )}
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <Calendar className="text-primary" size={20} />
                    <span>Durée: {formation.duration}</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <BookOpen className="text-primary" size={20} />
                    <span>{formation.modules.length} modules</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <GraduationCap className="text-primary" size={20} />
                    <span>Format: {formation.format}</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <FileText className="text-primary" size={20} />
                    <span>Évaluation: {formation.evaluation}</span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t">
                  <p className="font-medium text-dark mb-3">Formateur:</p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center">
                      <span className="text-primary font-bold">
                        {formation.instructor.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-dark">{formation.instructor}</p>
                      <p className="text-sm text-gray-500">Formateur certifié</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                {/* Description */}
                <div className="bg-white rounded-2xl shadow-md p-8">
                  <h2 className="text-2xl font-bold text-dark mb-4">À propos de cette formation</h2>
                  <p className="text-gray-600 leading-relaxed">{formation.longDescription}</p>
                </div>

                {/* Objectives */}
                <div className="bg-white rounded-2xl shadow-md p-8">
                  <h2 className="text-2xl font-bold text-dark mb-6">Objectifs de la formation</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {formation.objectives.map((objective, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle className="text-green-600" size={14} />
                        </div>
                        <span className="text-gray-700">{objective}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Compétences acquises */}
                <div className="bg-white rounded-2xl shadow-md p-8">
                  <h2 className="text-2xl font-bold text-dark mb-6">Compétences acquises</h2>
                  <div className="flex flex-wrap gap-3">
                    {formation.skills.map((skill, index) => (
                      <span 
                        key={index} 
                        className="px-4 py-2 bg-primary-light text-primary rounded-full font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Programme */}
                <div className="bg-white rounded-2xl shadow-md p-8">
                  <h2 className="text-2xl font-bold text-dark mb-6">Programme de la formation</h2>
                  <div className="space-y-4">
                    {formation.modules.map((module, index) => (
                      <div key={index} className="flex items-center gap-4 p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium text-dark">{module.title}</h3>
                          <p className="text-sm text-gray-500">{module.lessons} leçons • {module.duration}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <div className="bg-white rounded-2xl shadow-md p-6 sticky top-32">
                  <h3 className="text-xl font-bold text-dark mb-4">Informations pratiques</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Niveau</span>
                      <span className="font-medium text-dark">{formation.level}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Durée</span>
                      <span className="font-medium text-dark">{formation.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Modules</span>
                      <span className="font-medium text-dark">{formation.modules.length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Format</span>
                      <span className="font-medium text-dark">{formation.format}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Évaluation</span>
                      <span className="font-medium text-dark text-right">{formation.evaluation}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Certificat</span>
                      <span className="font-medium text-green-600">{formation.hasCertificate ? 'Oui' : 'Non'}</span>
                    </div>
                  </div>

                  <div className="pt-6 border-t">
                    {formation.isFree ? (
                      <Link 
                        href="/inscription" 
                        className="flex items-center justify-center gap-2 w-full py-4 bg-primary text-white font-bold rounded-full hover:bg-primary/90 transition-colors"
                      >
                        Commencer gratuitement
                        <Play size={20} />
                      </Link>
                    ) : (
                      <Link 
                        href="/inscription" 
                        className="flex items-center justify-center gap-2 w-full py-4 bg-primary text-white font-bold rounded-full hover:bg-primary/90 transition-colors"
                      >
                        S'inscrire - {formation.price.toLocaleString()} Fcfa
                      </Link>
                    )}
                    <p className="text-center text-gray-500 text-sm mt-4">
                      Garantie satisfaction 30 jours
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Prêt à commencer ?</h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Rejoignez {formation.students.toLocaleString()} apprenants et transformez votre carrière dès aujourd'hui.
            </p>
            <Link 
              href="/inscription" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-gray-100 transition-colors"
            >
              Je m'inscris maintenant
              <ChevronRight size={20} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
