'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Clock, Users, BookOpen, Award, CheckCircle, Play, ChevronRight } from 'lucide-react';

// Données des formations (à remplacer par API/database)
const formationsData: Record<string, {
  id: number;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  duration: string;
  students: number;
  level: string;
  modules: { title: string; lessons: number }[];
  objectives: string[];
  requirements: string[];
  teacher: {
    name: string;
    role: string;
    image: string;
    bio: string;
  };
}> = {
  '1': {
    id: 1,
    title: 'HTML & CSS Fondamentaux',
    category: 'Développement Web',
    description: 'Apprenez les bases du développement web avec HTML et CSS. Créez vos premières pages web.',
    longDescription: 'Cette formation complète vous permettra de maîtriser les fondamentaux du développement web. Vous apprendrez à structurer vos pages avec HTML et à les mettre en forme avec CSS. À la fin de cette formation, vous serez capable de créer des sites web responsifs et esthétiques.',
    duration: '4 semaines',
    students: 1250,
    level: 'Débutant',
    modules: [
      { title: 'Introduction au Web', lessons: 3 },
      { title: 'Les bases de HTML', lessons: 5 },
      { title: 'Structuration des pages', lessons: 4 },
      { title: 'Introduction au CSS', lessons: 4 },
      { title: 'Mise en forme avancée', lessons: 5 },
      { title: 'Projet final', lessons: 2 },
    ],
    objectives: [
      'Comprendre le fonctionnement du web',
      'Maîtriser la structure HTML des pages',
      'Appliquer des styles CSS efficaces',
      'Créer des sites web responsifs',
    ],
    requirements: [
      'Aucun prérequis',
      'Un ordinateur avec un éditeur de texte',
      'Une connexion internet pour les vidéos',
    ],
    teacher: {
      name: 'Jean Dupont',
      role: 'Développeur Web',
      image: '/images/teacher-1.png',
      bio: 'Développeur web avec 10 ans d\'expérience, ancien formateur chez Google.',
    },
  },
  '2': {
    id: 2,
    title: 'JavaScript pour débutants',
    category: 'Développement Web',
    description: 'Maîtrisez les fondamentaux de JavaScript pour rendre vos sites web interactifs.',
    longDescription: 'JavaScript est le langage du web moderne. Cette formation vous permettra de comprendre la logique de programmation et de créer des interactions dynamiques sur vos pages web.',
    duration: '6 semaines',
    students: 980,
    level: 'Débutant',
    modules: [
      { title: 'Introduction à JavaScript', lessons: 3 },
      { title: 'Les variables et types de données', lessons: 4 },
      { title: 'Les structures de contrôle', lessons: 5 },
      { title: 'Les fonctions', lessons: 4 },
      { title: 'Le DOM', lessons: 5 },
      { title: 'Projet pratique', lessons: 3 },
    ],
    objectives: [
      'Comprendre la logique de programmation',
      'Manipuler le DOM avec JavaScript',
      'Créer des interactions dynamiques',
      'Valider vos acquis avec un projet',
    ],
    requirements: [
      'Connaissances de base en HTML/CSS',
      'Un ordinateur avec un éditeur de code',
    ],
    teacher: {
      name: 'Marie Martin',
      role: 'Développeuse Frontend',
      image: '/images/teacher-2.png',
      bio: 'Spécialiste JavaScript avec 7 ans d\'expérience en développement frontend.',
    },
  },
};

export default function FormationDetailPage() {
  const params = useParams();
  const id = params?.id as string;
  
  // Si l'ID n'existe pas dans nos données, on affiche un message
  const formation = formationsData[id];
  
  if (!formation) {
    return (
      <>
        <Navigation />
        <main className="min-h-screen pt-56 pb-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="section-title-main mb-4">Formation non trouvée</h1>
            <p className="section-description mb-8">
              Désolé, cette formation n'existe pas ou a été supprimée.
            </p>
            <Link href="/formations" className="btn-primary">
              Voir toutes les formations
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="pt-56 pb-16 bg-light">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-primary font-medium">{formation.category}</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-500">{formation.level}</span>
                </div>
                <h1 className="section-title-main mb-4">{formation.title}</h1>
                <p className="text-xl text-gray-600 mb-8">{formation.longDescription}</p>
                
                <div className="flex flex-wrap gap-6 mb-8">
                  <div className="flex items-center gap-2">
                    <Clock className="text-primary" size={20} />
                    <span>{formation.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="text-primary" size={20} />
                    <span>{formation.students.toLocaleString()} apprenants</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="text-primary" size={20} />
                    <span>{formation.modules.reduce((acc, m) => acc + m.lessons, 0)} leçons</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <Link href="/inscription" className="btn-primary">
                    S'inscrire gratuitement
                  </Link>
                  <button className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors">
                    <Play size={20} />
                    <span>Voir la démo</span>
                  </button>
                </div>
              </div>
              
              <div className="lg:col-span-1">
                <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
                  <div className="text-center mb-6">
                    <div className="w-24 h-24 mx-auto rounded-full bg-gray-200 mb-4 flex items-center justify-center">
                      <BookOpen size={48} className="text-gray-400" />
                    </div>
                    <h3 className="font-semibold text-lg">{formation.teacher.name}</h3>
                    <p className="text-gray-500 text-sm">{formation.teacher.role}</p>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="text-green-500" size={20} />
                      <span>100% en ligne</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="text-green-500" size={20} />
                      <span>Certification incluse</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="text-green-500" size={20} />
                      <span>Accès à vie</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="text-green-500" size={20} />
                      <span>Support communautaire</span>
                    </div>
                  </div>
                  
                  <Link href="/inscription" className="w-full btn-primary flex items-center justify-center gap-2">
                    Commencer maintenant
                    <ChevronRight size={18} />
                  </Link>
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
                  <h2 className="text-2xl font-bold mb-6">Ce que vous apprendrez</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {formation.objectives.map((objective, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                        <span>{objective}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Programme */}
                <div>
                  <h2 className="text-2xl font-bold mb-6">Programme de la formation</h2>
                  <div className="space-y-4">
                    {formation.modules.map((module, index) => (
                      <div key={index} className="bg-light rounded-xl p-4">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold">
                            {index + 1}. {module.title}
                          </h4>
                          <span className="text-gray-500 text-sm">{module.lessons} leçons</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Prérequis */}
                <div>
                  <h2 className="text-2xl font-bold mb-6">Prérequis</h2>
                  <ul className="space-y-3">
                    {formation.requirements.map((req, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <ChevronRight className="text-primary mt-1 flex-shrink-0" size={20} />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="lg:col-span-1">
                {/* Instructor */}
                <div className="bg-light rounded-2xl p-6">
                  <h3 className="font-bold text-lg mb-4">Votre formateur</h3>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
                      <Users size={32} className="text-gray-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{formation.teacher.name}</h4>
                      <p className="text-gray-500 text-sm">{formation.teacher.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">{formation.teacher.bio}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Prêt à commencer ?</h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Rejoignez {formation.students.toLocaleString()} apprenants et développez vos compétences numériques.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/inscription" className="px-8 py-3 bg-white text-primary rounded-full font-medium hover:bg-gray-100 transition-colors">
                S'inscrire gratuitement
              </Link>
              <Link href="/formations" className="px-8 py-3 border-2 border-white text-white rounded-full font-medium hover:bg-white hover:text-primary transition-colors">
                Voir d'autres formations
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
