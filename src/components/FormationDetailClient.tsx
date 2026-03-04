'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { 
  Play, Clock, Users, Award, CheckCircle, Star, ChevronDown, ChevronUp,
  FileText, Download, MessageCircle, Share2, Heart, ArrowLeft, Calendar,
  Languages, Laptop, Briefcase, Sparkles, GraduationCap, Target,
  Accessibility, PiggyBank, TrendingUp, Rocket, PenTool, Code, UserCheck
} from 'lucide-react';

const formations = [
  // ANGLAIS
  {
    id: 1,
    title: 'Anglais : Les fondamentaux qui ouvrent les portes',
    category: 'anglais',
    subcategory: 'Anglais',
    description: 'Compétences de base et fondamentaux en langue anglaise pour communiquer avec confiance.',
    longDescription: 'Cette formation complète vous accompagne de "je comprends un peu" à "je peux communiquer avec confiance". Vous apprendrez la grammaire essentielle simplifiée, le vocabulaire professionnel, l\'expression orale guidée et utiliserez des supports interactifs (quiz, audio, exercices pratiques). L\'anglais orienté carrière et business est au cœur de cette formation.',
    duration: '8 semaines',
    durationType: 'moyenne',
    students: 1250,
    level: 'Débutant',
    price: 25000,
    isFree: false,
    instructor: 'Équipe Wurami',
    hasCertificate: true,
    rating: 4.8,
    badge: 'La plus populaire',
    objectives: [
      'Maîtriser la grammaire essentielle simplifiée',
      'Acquérir un vocabulaire professionnel',
      'Développer l\'expression orale guidée',
      'Utiliser les supports interactifs (quiz, audio, exercices)'
    ],
    skills: ['Grammaire', 'Vocabulaire professionnel', 'Expression orale', 'Anglais business'],
    icon: Languages,
    features: ['Grammaire essentielle simplifiée', 'Vocabulaire professionnel', 'Expression orale guidée', 'Supports interactifs', 'Anglais orienté carrière'],
    modules: [
      { title: 'Introduction et alphabétisation', lessons: 4, duration: '4h' },
      { title: 'Grammaire de base', lessons: 6, duration: '6h' },
      { title: 'Vocabulaire quotidien', lessons: 5, duration: '5h' },
      { title: 'Vocabulaire professionnel', lessons: 6, duration: '6h' },
      { title: 'Expression orale guidée', lessons: 8, duration: '8h' },
      { title: 'Anglais business', lessons: 6, duration: '6h' },
    ]
  },
  // COMPÉTENCES TECHNIQUES - Design & Web
  {
    id: 2,
    title: 'Introduction au design & à la rédaction web',
    category: 'techniques',
    subcategory: 'Design & Web',
    description: 'Bases du graphisme, création de visuels professionnels et rédaction web persuasive.',
    longDescription: 'Apprenez les bases du graphisme et créez des visuels professionnels pour votre activité. Cette formation couvre également la rédaction web persuasive pour convertir vos visiteurs en clients, ainsi qu\'une introduction aux outils digitaux modernes.',
    duration: '6 semaines',
    durationType: 'moyenne',
    students: 850,
    level: 'Débutant',
    price: 20000,
    isFree: false,
    instructor: 'Équipe Wurami',
    hasCertificate: true,
    rating: 4.7,
    badge: 'Très demandée',
    objectives: [
      'Maîtriser les bases du graphisme',
      'Créer des visuels professionnels',
      'Rédiger pour le web de manière persuasive',
      'Utiliser les outils digitaux modernes'
    ],
    skills: ['Graphisme', 'Canva', 'Rédaction web', 'Outils digitaux'],
    icon: PenTool,
    features: ['Bases du graphisme', 'Création de visuels professionnels', 'Rédaction web persuasive', 'Introduction aux outils digitaux'],
    modules: [
      { title: 'Introduction au design', lessons: 4, duration: '4h' },
      { title: 'Outils de design (Canva, etc.)', lessons: 6, duration: '6h' },
      { title: 'Principes du design', lessons: 5, duration: '5h' },
      { title: 'Rédaction web', lessons: 6, duration: '6h' },
      { title: 'Outils digitaux modernes', lessons: 5, duration: '5h' },
    ]
  },
  // COMPÉTENCES TECHNIQUES - Bureautique
  {
    id: 3,
    title: 'Compétences numériques de base',
    category: 'techniques',
    subcategory: 'Bureautique',
    description: 'Bureautique, navigation sécurisée et organisation numérique pour devenir opérationnel.',
    longDescription: 'Devenez opérationnel dans un environnement digital avec cette formation complète couvrant Word, Excel, PowerPoint, la navigation sécurisée sur internet, la recherche efficace en ligne et l\'organisation numérique.',
    duration: '4 semaines',
    durationType: 'courte',
    students: 1100,
    level: 'Débutant',
    price: 15000,
    isFree: false,
    instructor: 'Équipe Wurami',
    hasCertificate: true,
    rating: 4.9,
    badge: null,
    objectives: [
      'Maîtriser Word, Excel et PowerPoint',
      'Naviguer en sécurité sur internet',
      'Effectuer des recherches efficaces en ligne',
      'S\'organiser numériquement'
    ],
    skills: ['Word', 'Excel', 'PowerPoint', 'Navigation sécurisée'],
    icon: Laptop,
    features: ['Bureautique (Word, Excel, PowerPoint)', 'Navigation sécurisée', 'Recherche efficace en ligne', 'Organisation numérique'],
    modules: [
      { title: 'Word Avancé', lessons: 6, duration: '6h' },
      { title: 'Excel Base', lessons: 8, duration: '8h' },
      { title: 'PowerPoint Professionnel', lessons: 5, duration: '5h' },
      { title: 'Navigation et sécurité', lessons: 4, duration: '4h' },
    ]
  },
  // EMPLOIABILITÉ - Métiers du numérique
  {
    id: 4,
    title: 'Métiers du numérique',
    category: 'employabilite',
    subcategory: 'Métiers numériques',
    description: 'Introduction à l\'UX/UI, marketing digital et création de présence en ligne.',
    longDescription: 'Découvrez les métiers du numérique et créez votre présence en ligne. Cette formation couvre l\'introduction à l\'UX/UI, le marketing digital et les stratégies pour développer votre réseau professionnel.',
    duration: '10 semaines',
    durationType: 'longue',
    students: 720,
    level: 'Intermédiaire',
    price: 35000,
    isFree: false,
    instructor: 'Équipe Wurami',
    hasCertificate: true,
    rating: 4.6,
    badge: 'Nouvelle',
    objectives: [
      'Découvrir l\'UX/UI design',
      'Maîtriser le marketing digital',
      'Créer une présence en ligne professionnelle',
      'Développer son réseau professionnel'
    ],
    skills: ['UX/UI', 'Marketing digital', 'Présence en ligne', 'Réseaux professionnels'],
    icon: Code,
    features: ['Introduction UX / UI', 'Marketing digital', 'Création de présence en ligne'],
    modules: [
      { title: 'Introduction au numérique', lessons: 4, duration: '4h' },
      { title: 'UX/UI Design', lessons: 8, duration: '8h' },
      { title: 'Marketing Digital', lessons: 10, duration: '10h' },
      { title: 'Présence en ligne', lessons: 6, duration: '6h' },
      { title: 'Réseaux professionnels', lessons: 5, duration: '5h' },
    ]
  },
  // EMPLOIABILITÉ - Développement professionnel
  {
    id: 5,
    title: 'Développement professionnel',
    category: 'employabilite',
    subcategory: 'Développement pro',
    description: 'Rédaction de CV stratégique, préparation aux entretiens et soft skills essentiels.',
    longDescription: 'Ne subissez plus le marché du travail, positionnez-vous intelligemment. Cette formation vous apprend à rédiger un CV stratégique, à vous préparer aux entretiens et à développer vos soft skills.',
    duration: '4 semaines',
    durationType: 'courte',
    students: 950,
    level: 'Tous niveaux',
    price: 0,
    isFree: true,
    instructor: 'Équipe Wurami',
    hasCertificate: true,
    rating: 4.9,
    badge: 'Gratuite',
    objectives: [
      'Rédiger un CV stratégique',
      'Se préparer aux entretiens d\'embauche',
      'Développer les soft skills',
      'Améliorer sa communication'
    ],
    skills: ['CV', 'Entretien', 'Communication', 'Leadership'],
    icon: UserCheck,
    features: ['Rédaction de CV stratégique', 'Préparation aux entretiens', 'Soft skills (communication, leadership, gestion du stress)'],
    modules: [
      { title: 'Rédaction de CV', lessons: 4, duration: '4h' },
      { title: 'Préparation aux entretiens', lessons: 5, duration: '5h' },
      { title: 'Soft skills', lessons: 6, duration: '6h' },
      { title: 'Communication', lessons: 4, duration: '4h' },
    ]
  },
  // EMPLOIABILITÉ - Orientation carrière
  {
    id: 6,
    title: 'Orientation carrière & entrepreneuriat',
    category: 'employabilite',
    subcategory: 'Carrière',
    description: 'Identifier son profil, construire un plan de carrière et lancer un projet.',
    longDescription: 'Identifiez votre profil professionnel, construisez un plan de carrière efficace et lancez votre projet entrepreneurial. Cette formation vous donne les clés pour ne plus subir le marché du travail.',
    duration: '6 semaines',
    durationType: 'moyenne',
    students: 680,
    level: 'Tous niveaux',
    price: 20000,
    isFree: false,
    instructor: 'Équipe Wurami',
    hasCertificate: true,
    rating: 4.7,
    badge: null,
    objectives: [
      'Identifier son profil professionnel',
      'Construire un plan de carrière',
      'Lancer un projet entrepreneurial',
      'Développer son réseau'
    ],
    skills: ['Orientation', 'Plan de carrière', 'Entrepreneuriat', 'Réseau'],
    icon: Target,
    features: ['Identifier son profil', 'Construire un plan de carrière', 'Lancer un projet'],
    modules: [
      { title: 'Identification du profil', lessons: 4, duration: '4h' },
      { title: 'Plan de carrière', lessons: 6, duration: '6h' },
      { title: 'Lancer un projet', lessons: 6, duration: '6h' },
      { title: 'Réseau professionnel', lessons: 4, duration: '4h' },
    ]
  },
  // STEM
  {
    id: 7,
    title: 'STEM & Apprentissage innovant',
    category: 'stem',
    subcategory: 'STEM',
    description: 'Modules interactifs en sciences, technologie, ingénierie et mathématiques pour développer l\'esprit critique.',
    longDescription: 'Développez l\'esprit critique et la capacité d\'innovation avec nos modules interactifs en sciences, technologie, ingénierie et mathématiques. Includes des simulations éducatives et des expérimentations virtuelles.',
    duration: '12 semaines',
    durationType: 'longue',
    students: 450,
    level: 'Tous niveaux',
    price: 30000,
    isFree: false,
    instructor: 'Équipe Wurami',
    hasCertificate: true,
    rating: 4.8,
    badge: 'Innovant',
    objectives: [
      'Découvrir les sciences et technologies',
      'S\'initier à l\'ingénierie',
      'Maîtriser les mathématiques appliquées',
      'Développer l\'esprit critique et l\'innovation'
    ],
    skills: ['Sciences', 'Technologie', 'Ingénierie', 'Mathématiques'],
    icon: Sparkles,
    features: ['Modules interactifs en sciences, technologie, ingénierie et mathématiques', 'Simulations éducatives', 'Expérimentations virtuelles', 'Résolution de problèmes concrets'],
    modules: [
      { title: 'Introduction aux STEM', lessons: 4, duration: '4h' },
      { title: 'Sciences', lessons: 6, duration: '6h' },
      { title: 'Technologie', lessons: 6, duration: '6h' },
      { title: 'Ingénierie', lessons: 6, duration: '6h' },
      { title: 'Mathématiques appliquées', lessons: 6, duration: '6h' },
    ]
  },
  // INCLUSION
  {
    id: 8,
    title: 'Inclusion & accès élargi',
    category: 'inclusion',
    subcategory: 'Inclusion',
    description: 'Cours accessibles aux personnes malentendantes et contenus adaptés aux zones à faible connectivité.',
    longDescription: 'Personne ne reste à la traîne. Cette formation propose des cours accessibles aux personnes malentendantes, des contenus adaptés aux zones à faible connectivité, des supports téléchargeables et un apprentissage hybride.',
    duration: 'Flexible',
    durationType: 'courte',
    students: 320,
    level: 'Tous niveaux',
    price: 0,
    isFree: true,
    instructor: 'Équipe Wurami',
    hasCertificate: true,
    rating: 5.0,
    badge: 'Accessible',
    objectives: [
      'Accéder à des cours adaptés aux personnes malentendantes',
      'Profiter de contenus en faible connectivité',
      'Télécharger les supports',
      'Combiner numérique et présentiel'
    ],
    skills: ['Accessibilité', 'Apprentissage hybride', 'Autoformation'],
    icon: Accessibility,
    features: ['Cours accessibles aux personnes malentendantes', 'Contenus adaptés aux zones à faible connectivité', 'Supports téléchargeables', 'Apprentissage hybride'],
    modules: [
      { title: 'Accessibilité numérique', lessons: 3, duration: '3h' },
      { title: 'Contenus basse connexion', lessons: 4, duration: '4h' },
      { title: 'Supports téléchargeables', lessons: 3, duration: '3h' },
      { title: 'Apprentissage hybride', lessons: 4, duration: '4h' },
    ]
  },
  // ÉDUCATION COMMUNAUTAIRE - Adultes
  {
    id: 9,
    title: 'Formation pour adultes',
    category: 'communaute',
    subcategory: 'Adultes',
    description: 'Finance personnelle et stratégies pour trouver un emploi.',
    longDescription: 'Formation complète pour adultes couvrant la finance personnelle et les stratégies de recherche d\'emploi. Apprenez à gérer votre budget, planifier votre avenir financier et développer des stratégies efficaces pour trouver un emploi.',
    duration: '6 semaines',
    durationType: 'moyenne',
    students: 580,
    level: 'Tous niveaux',
    price: 15000,
    isFree: false,
    instructor: 'Équipe Wurami',
    hasCertificate: true,
    rating: 4.6,
    badge: null,
    objectives: [
      'Maîtriser la finance personnelle',
      'Développer des stratégies de recherche d\'emploi',
      'Gérer son budget',
      'Planifier son avenir financier'
    ],
    skills: ['Finance', 'Budget', 'Recherche emploi', 'Planification'],
    icon: PiggyBank,
    features: ['Finance personnelle', 'Stratégies pour trouver un emploi'],
    modules: [
      { title: 'Finance personnelle', lessons: 5, duration: '5h' },
      { title: 'Budget et épargne', lessons: 4, duration: '4h' },
      { title: 'Recherche d\'emploi', lessons: 5, duration: '5h' },
      { title: 'Planification financière', lessons: 4, duration: '4h' },
    ]
  },
  // ÉDUCATION COMMUNAUTAIRE - Jeunes
  {
    id: 10,
    title: 'Éducation financière & entrepreneuriale pour jeunes',
    category: 'communaute',
    subcategory: 'Jeunes',
    description: 'Comprendre l\'argent, construire un projet et préparer une levée de fonds.',
    longDescription: 'Formation destinée aux jeunes pour comprendre le fonctionnement de l\'argent, construire un projet entrepreneurial et préparer une levée de fonds. Formez des citoyens économiquement solides.',
    duration: '8 semaines',
    durationType: 'moyenne',
    students: 420,
    level: 'Débutant',
    price: 20000,
    isFree: false,
    instructor: 'Équipe Wurami',
    hasCertificate: true,
    rating: 4.7,
    badge: 'Pour les jeunes',
    objectives: [
      'Comprendre le fonctionnement de l\'argent',
      'Construire un projet entrepreneurial',
      'Préparer une levée de fonds',
      'Développer una mentalidad financière'
    ],
    skills: ['Finance', 'Entrepreneuriat', 'Levée de fonds', 'Gestion de projet'],
    icon: TrendingUp,
    features: ['Comprendre l\'argent', 'Construire un projet', 'Préparer une levée de fonds'],
    modules: [
      { title: 'Comprendre l\'argent', lessons: 4, duration: '4h' },
      { title: 'Gestion de projet', lessons: 6, duration: '6h' },
      { title: 'Entrepreneuriat', lessons: 6, duration: '6h' },
      { title: 'Levée de fonds', lessons: 5, duration: '5h' },
    ]
  },
  // PROGRAMME OPE
  {
    id: 11,
    title: 'Programme OPE – Obtenir mon Premier Emploi',
    category: 'ope',
    subcategory: 'Programme OPE',
    description: 'Un programme structuré pour décrocher son premier emploi.',
    longDescription: 'Le programme OPE (Obtenir mon Premier Emploi) est un programme structuré pour clarifier votre positionnement, construire un CV stratégique, maîtriser l\'entretien, développer un réseau et décrocher votre premier contrat.',
    duration: '10 semaines',
    durationType: 'longue',
    students: 890,
    level: 'Débutant',
    price: 35000,
    isFree: false,
    instructor: 'Équipe Wurami',
    hasCertificate: true,
    rating: 4.9,
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
    features: ['Clarifier son positionnement', 'Construire un CV stratégique', 'Maîtriser l\'entretien', 'Développer un réseau', 'Décrocher son premier contrat'],
    modules: [
      { title: 'Positionnement professionnel', lessons: 4, duration: '4h' },
      { title: 'CV stratégique', lessons: 4, duration: '4h' },
      { title: 'Préparation à l\'entretien', lessons: 6, duration: '6h' },
      { title: 'Développement du réseau', lessons: 5, duration: '5h' },
      { title: 'Prospection et négociation', lessons: 5, duration: '5h' },
    ]
  },
  // JE COMMUNIQUE PAR MAIL
  {
    id: 12,
    title: 'Je communique par mail',
    category: 'techniques',
    subcategory: 'Communication',
    description: 'Apprenez à utiliser efficacement votre boîte mail pour communiquer.',
    longDescription: 'Ce cours dispensé par EMMAUS CONNECT vous apprendre à vous repérer sur une boîte mail et à appliquer les règles de sécurité concernant les mails. Le cours est bien détaillé et accessible à tous.',
    duration: 'Variable',
    durationType: 'courte',
    students: 0,
    level: 'Tous niveaux',
    price: 0,
    isFree: true,
    instructor: 'EMMAUS CONNECT',
    hasCertificate: false,
    rating: 5.0,
    badge: 'Nouveau',
    objectives: [
      'Se repérer sur une boîte mail',
      'Appliquer les règles de sécurité concernant les mails'
    ],
    skills: ['Boîte mail', 'Sécurité email', 'Communication'],
    icon: Mail,
    features: ['Cours PDF', 'Bien détaillé', 'Gratuit', 'Accessible à tous'],
    modules: [
      { title: 'Se repérer sur une boîte mail', lessons: 1, duration: '30min' },
      { title: 'Règles de sécurité', lessons: 1, duration: '30min' },
    ],
    pdfUrl: '/Je-communique-par-mail.pdf'
  },
];

export default function FormationDetailClient() {
  const params = useParams();
  const formationId = parseInt(params.id as string);
  const formation = formations.find(f => f.id === formationId);
  const [activeModule, setActiveModule] = useState<number | null>(null);
  const [isFavorite, setIsFavorite] = useState(false);

  if (!formation) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Formation non trouvée</h1>
          <Link href="/formations" className="text-blue-600 hover:underline">
            Retour aux formations
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = formation.icon;

  return (
    <div className="min-h-screen bg-light">
      {/* Hero */}
      <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-4">
          <Link href="/formations" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8">
            <ArrowLeft size={20} />
            Retour aux formations
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-white/20 px-4 py-1 rounded-full text-sm">
                  {formation.subcategory}
                </span>
                {formation.badge && (
                  <span className="bg-green-500 px-4 py-1 rounded-full text-sm font-medium">
                    {formation.badge}
                  </span>
                )}
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{formation.title}</h1>
              <p className="text-xl text-blue-100 mb-8">{formation.longDescription}</p>
              
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <Clock size={20} />
                  <span>{formation.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users size={20} />
                  <span>{formation.students} apprenants</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award size={20} />
                  <span>{formation.level}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star size={20} className="text-yellow-400 fill-current" />
                  <span>{formation.rating}/5</span>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                {formation.isFree ? (
                  <span className="text-4xl font-bold text-green-400">Gratuit</span>
                ) : (
                  <span className="text-4xl font-bold">{formation.price.toLocaleString()} XOF</span>
                )}
                <button 
                  className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-colors"
                  onClick={() => {
                    if (formation.pdfUrl) {
                      window.open(formation.pdfUrl, '_blank');
                    }
                  }}
                >
                  {formation.pdfUrl ? 'Lire le PDF' : formation.isFree ? 'Commencer maintenant' : 'S\'inscrire'}
                </button>
                <button 
                  onClick={() => setIsFavorite(!isFavorite)}
                  className={`p-4 rounded-xl border-2 transition-colors ${isFavorite ? 'border-red-500 bg-red-50 text-red-500' : 'border-white/30 text-white hover:bg-white/10'}`}
                >
                  <Heart size={24} fill={isFavorite ? 'currentColor' : 'none'} />
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 flex items-center justify-center">
                <IconComponent size={120} className="text-white/30" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Objectifs */}
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <h2 className="text-2xl font-bold mb-6">Objectifs de la formation</h2>
              <ul className="space-y-4">
                {formation.objectives.map((objective, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{objective}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Compétences */}
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <h2 className="text-2xl font-bold mb-6">Compétences acquises</h2>
              <div className="flex flex-wrap gap-3">
                {formation.skills.map((skill, index) => (
                  <span key={index} className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Programme */}
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <h2 className="text-2xl font-bold mb-6">Programme de la formation</h2>
              <div className="space-y-4">
                {formation.modules.map((module, index) => (
                  <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                    <button
                      onClick={() => setActiveModule(activeModule === index ? null : index)}
                      className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold">
                          {index + 1}
                        </span>
                        <span className="font-semibold text-gray-800">{module.title}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-gray-500">{module.lessons} leçons • {module.duration}</span>
                        {activeModule === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                      </div>
                    </button>
                    {activeModule === index && (
                      <div className="p-4 bg-gray-50 border-t border-gray-200">
                        <p className="text-gray-600">Ce module couvre {module.title.toLowerCase()} avec {module.lessons} leçons.</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="space-y-6">
            {/* Features */}
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="text-lg font-bold mb-4">Cette formation inclut</h3>
              <ul className="space-y-3">
                {formation.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="text-green-500" size={18} />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
                <li className="flex items-center gap-3">
                  <Award className="text-blue-500" size={18} />
                  <span>Certificat de completion</span>
                </li>
              </ul>
            </div>
            
            {/* Share */}
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="text-lg font-bold mb-4">Partager cette formation</h3>
              <div className="flex gap-3">
                <button className="flex-1 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Partager
                </button>
                <button className="py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <Share2 size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
