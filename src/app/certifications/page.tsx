'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  Award, 
  CheckCircle, 
  Clock, 
  Users, 
  FileText, 
  Download,
  Share2,
  ChevronRight,
  Shield,
  GraduationCap,
  Briefcase,
  Leaf,
  Heart
} from 'lucide-react';

export default function CertificationsPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Toutes les certifications' },
    { id: 'digital', name: 'Digitales' },
    { id: 'entrepreneuriat', name: 'Entrepreneuriat & Business' },
    { id: 'agribusiness', name: 'Agribusiness' },
    { id: 'leadership', name: 'Leadership' },
  ];

  const certifications = [
    // Digitales
    {
      id: 1,
      title: 'Certification en Marketing Digital',
      category: 'digital',
      level: 'Débutant',
      duration: '8 semaines',
      students: 850,
      price: 35000,
      skills: ['SEO', 'Google Ads', 'Analytics', 'Email Marketing'],
      evaluation: 'Projet pratique + Quiz',
      format: 'En ligne',
      badge: 'La plus demandée',
    },
    {
      id: 2,
      title: 'Certification en Community Management',
      category: 'digital',
      level: 'Débutant',
      duration: '6 semaines',
      students: 620,
      price: 28000,
      skills: ['Gestion des réseaux sociaux', 'Contenu', 'Engagement'],
      evaluation: 'Portfolio de contenu',
      format: 'En ligne',
      badge: null,
    },
    {
      id: 3,
      title: 'Certification en Compétences Numériques Professionnelles',
      category: 'digital',
      level: 'Débutant',
      duration: '10 semaines',
      students: 980,
      price: 45000,
      skills: ['Word', 'Excel', 'PowerPoint', 'Google Workspace'],
      evaluation: 'Tests pratiques',
      format: 'En ligne',
      badge: 'Référencée',
    },
    {
      id: 4,
      title: 'Certification en Intelligence Artificielle & Outils Modernes',
      category: 'digital',
      level: 'Intermédiaire',
      duration: '6 semaines',
      students: 420,
      price: 40000,
      skills: ['IA', 'ChatGPT', 'Automatisation', 'Productivité'],
      evaluation: 'Projet pratique',
      format: 'En ligne',
      badge: 'Nouvelle',
    },
    // Entrepreneuriat
    {
      id: 5,
      title: 'Certification en Rédaction de Projet à Fort Impact',
      category: 'entrepreneuriat',
      level: 'Intermédiaire',
      duration: '8 semaines',
      students: 380,
      price: 50000,
      skills: ['Business Plan', 'Pitch Deck', 'Étude de marché'],
      evaluation: 'Projet complet',
      format: 'En ligne + Accompagnement',
      badge: null,
    },
    {
      id: 6,
      title: 'Certification en Lever de Fonds pour un Projet',
      category: 'entrepreneuriat',
      level: 'Avancé',
      duration: '6 semaines',
      students: 180,
      price: 55000,
      skills: ['Investisseurs', 'Pitch', 'Négociation', 'Due diligence'],
      evaluation: 'Simulation de levée',
      format: 'En ligne + Atelier',
      badge: null,
    },
    {
      id: 7,
      title: 'Certification en Business Model & Plan d\'Action',
      category: 'entrepreneuriat',
      level: 'Débutant',
      duration: '10 semaines',
      students: 520,
      price: 45000,
      skills: ['Business Model Canvas', 'Stratégie', 'Plan d\'action'],
      evaluation: 'Business Model complet',
      format: 'En ligne',
      badge: 'La plus suivie',
    },
    // Agribusiness
    {
      id: 8,
      title: 'Certification en Commercialisation Agricole',
      category: 'agribusiness',
      level: 'Débutant',
      duration: '6 semaines',
      students: 290,
      price: 35000,
      skills: ['Marketing agricole', 'Négociation', 'Distribution'],
      evaluation: 'Plan commercial',
      format: 'En ligne',
      badge: null,
    },
    {
      id: 9,
      title: 'Certification en Gestion d\'Activité Agricole',
      category: 'agribusiness',
      level: 'Intermédiaire',
      duration: '8 semaines',
      students: 210,
      price: 40000,
      skills: ['Planification', 'Gestion intrants', 'Rentabilité'],
      evaluation: 'Plan de gestion',
      format: 'En ligne',
      badge: null,
    },
    // Leadership
    {
      id: 10,
      title: 'Certification en Leadership & Management Personnel',
      category: 'leadership',
      level: 'Tous niveaux',
      duration: '8 semaines',
      students: 450,
      price: 38000,
      skills: ['Leadership', 'Management', 'Prise de décision'],
      evaluation: 'Projet + Assessment',
      format: 'En ligne',
      badge: 'La plus suivie',
    },
    {
      id: 11,
      title: 'Certification en Prise de Parole & Communication',
      category: 'leadership',
      level: 'Tous niveaux',
      duration: '4 semaines',
      students: 380,
      price: 25000,
      skills: ['Rhétorique', 'Gestuelle', 'Expression orale'],
      evaluation: 'Exposé enregistré',
      format: 'En ligne',
      badge: null,
    },
    {
      id: 12,
      title: 'Certification en Discipline & Productivité',
      category: 'leadership',
      level: 'Débutant',
      duration: '4 semaines',
      students: 520,
      price: 20000,
      skills: ['Time management', 'Productivité', 'Focus'],
      evaluation: 'Plan d\'action',
      format: 'En ligne',
      badge: 'Très demandée',
    },
  ];

  const filteredCertifications = certifications.filter(cert => 
    activeCategory === 'all' || cert.category === activeCategory
  );

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'digital': return <Briefcase size={24} />;
      case 'entrepreneuriat': return <Briefcase size={24} />;
      case 'agribusiness': return <Leaf size={24} />;
      case 'leadership': return <Heart size={24} />;
      default: return <Award size={24} />;
    }
  };

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-light">
        {/* Hero Section */}
        <section className="pt-56 pb-16 bg-light">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-dark mb-4">
                Obtenez une certification reconnue et valorisez votre profil
              </h1>
              <p className="text-2xl text-gray-600 mb-8">
                Nos certifications attestent de compétences pratiques, directement applicables dans le monde professionnel et entrepreneurial
              </p>
              
              <div className="flex flex-wrap justify-center gap-8 text-gray-600">
                <div className="flex items-center gap-2">
                  <Users size={24} />
                  <span className="font-bold text-2xl text-primary">5,000+</span>
                  <span>Certifiés</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award size={24} />
                  <span className="font-bold text-2xl text-primary">12</span>
                  <span>Certifications</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield size={24} />
                  <span className="font-bold text-2xl text-primary">100%</span>
                  <span>Reconnues</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 bg-white border-b sticky top-20 z-40">
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

        {/* Certifications Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCertifications.map((cert) => (
                <div key={cert.id} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  {/* Header */}
                  <div className="bg-gradient-to-r from-primary to-blue-500 p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white">
                        {getCategoryIcon(cert.category)}
                      </div>
                      {cert.badge && (
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          cert.badge === 'La plus suivie' ? 'bg-yellow-500 text-white' :
                          cert.badge === 'Très demandée' ? 'bg-orange-500 text-white' :
                          'bg-green-500 text-white'
                        }`}>
                          {cert.badge}
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-white">{cert.title}</h3>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-1">
                        <Clock size={16} />
                        <span>{cert.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <GraduationCap size={16} />
                        <span>{cert.level}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users size={16} />
                        <span>{cert.students}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm text-gray-500 mb-2">Compétences validées :</p>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.slice(0, 3).map((skill, index) => (
                          <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                            {skill}
                          </span>
                        ))}
                        {cert.skills.length > 3 && (
                          <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                            +{cert.skills.length - 3}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-2">
                        <FileText size={16} className="text-primary" />
                        <span>Évaluation: {cert.evaluation}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Shield size={16} className="text-primary" />
                        <span>Format: {cert.format}</span>
                      </div>
                    </div>

                    <div className="pt-4 border-t flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold text-primary">{cert.price.toLocaleString()} Fcfa</span>
                      </div>
                      <Link
                        href={`/formations/${cert.id}`}
                        className="flex items-center gap-2 px-4 py-2 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors"
                      >
                        Passer la certification
                        <ChevronRight size={18} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredCertifications.length === 0 && (
              <div className="text-center py-16">
                <Award size={64} className="mx-auto text-gray-300 mb-4" />
                <h3 className="text-xl font-semibold text-dark mb-2">Aucune certification trouvée</h3>
                <p className="text-gray-600">Essayez avec une autre catégorie.</p>
              </div>
            )}
          </div>
        </section>

        {/* Why Certify */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-dark mb-4">Pourquoi obtenir une certification ?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Les certifications Wurami E-Learning sont reconnues par les employeurs et vous aident à vous démarquer
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 mx-auto rounded-full bg-primary-light flex items-center justify-center mb-4">
                  <Shield className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold text-dark mb-2">Reconnue professionnellement</h3>
                <p className="text-gray-600">
                  Nos certifications sont reconnues par les entreprises et organisations au Bénin et en Afrique de l'Ouest
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 mx-auto rounded-full bg-primary-light flex items-center justify-center mb-4">
                  <Award className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold text-dark mb-2">Badge numérique</h3>
                <p className="text-gray-600">
                  Téléchargez votre badge numérique et partagez-le sur LinkedIn et vos réseaux professionnels
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 mx-auto rounded-full bg-primary-light flex items-center justify-center mb-4">
                  <FileText className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold text-dark mb-2">Certificat signé</h3>
                <p className="text-gray-600">
                  Recevez un certificat authentique signé par Wurami E-Learning, vérifiable en ligne
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Prêt à obtenir votre certification ?</h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Inscrivez-vous à une formation et passez la certification pour valoriser votre profil professionnel
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/formations" 
                className="px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-gray-100 transition-colors"
              >
                Voir les formations
              </Link>
              <Link 
                href="/inscription" 
                className="px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-primary transition-colors"
              >
                S'inscrire
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
