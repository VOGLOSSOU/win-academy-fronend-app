'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Search, Clock, Users, Award, CheckCircle, ArrowRight } from 'lucide-react';

const certifications = [
  {
    id: 1,
    title: 'Certification Anglais Professionnel',
    category: 'anglais',
    description: 'Maîtrisez l\'anglais professionnel pour communiquer avec confiance en milieu professionnel.',
    duration: '8 semaines',
    students: 850,
    price: 35000,
    skills: ['Grammaire professionnelle', 'Vocabulaire business', 'Expression orale', 'Anglais écrit']
  },
  {
    id: 2,
    title: 'Certification Compétences Numériques',
    category: 'techniques',
    description: 'Validez vos compétences en bureautique et outils numériques.',
    duration: '4 semaines',
    students: 1100,
    price: 25000,
    skills: ['Word', 'Excel', 'PowerPoint', 'Navigation sécurisée']
  },
  {
    id: 3,
    title: 'Certification Marketing Digital',
    category: 'employabilite',
    description: 'Devenez un expert du marketing digital et créez votre présence en ligne.',
    duration: '10 semaines',
    students: 720,
    price: 45000,
    skills: ['SEO', 'Google Ads', 'Analytics', 'Email Marketing']
  },
  {
    id: 4,
    title: 'Certification Développement Professionnel',
    category: 'employabilite',
    description: 'Maîtrisez les compétences transversales pour réussir votre carrière.',
    duration: '4 semaines',
    students: 950,
    price: 15000,
    skills: ['CV', 'Entretien', 'Soft skills', 'Communication']
  },
  {
    id: 5,
    title: 'Certification STEM',
    category: 'stem',
    description: 'Développez vos compétences en sciences, technologie, ingénierie et mathématiques.',
    duration: '12 semaines',
    students: 450,
    price: 40000,
    skills: ['Sciences', 'Technologie', 'Ingénierie', 'Mathématiques']
  },
  {
    id: 6,
    title: 'Certification Inclusion & Accessibilité',
    category: 'inclusion',
    description: 'Apprenez à rendre le numérique accessible à tous.',
    duration: 'Flexible',
    students: 320,
    price: 0,
    skills: ['Accessibilité', 'Adaptation', 'Inclusion', 'Apprentissage hybride']
  },
  {
    id: 7,
    title: 'Certification Finance Personnelle',
    category: 'communaute',
    description: 'Gérez vos finances personnelles et строите votre avenir financier.',
    duration: '6 semaines',
    students: 580,
    price: 20000,
    skills: ['Budget', 'Épargne', 'Investissement', 'Planification']
  },
  {
    id: 8,
    title: 'Certification Entrepreneuriat',
    category: 'communaute',
    description: 'Lancez et gérez votre propre entreprise avec succès.',
    duration: '8 semaines',
    students: 420,
    price: 35000,
    skills: ['Création d\'entreprise', 'Gestion de projet', 'Levée de fonds', 'Business plan']
  },
  {
    id: 9,
    title: 'Certification Programme OPE',
    category: 'ope',
    description: 'Obtenez votre premier emploi avec ce programme complet.',
    duration: '10 semaines',
    students: 890,
    price: 45000,
    skills: ['Positionnement', 'CV', 'Entretien', 'Réseau professionnel']
  },
  {
    id: 10,
    title: 'Certification Design & Rédaction Web',
    category: 'techniques',
    description: 'Créez des visuels professionnels et rédigez pour le web.',
    duration: '6 semaines',
    students: 680,
    price: 30000,
    skills: ['Graphisme', 'Canva', 'Rédaction web', 'Outils digitaux']
  },
  {
    id: 11,
    title: 'Certification UX/UI Design',
    category: 'employabilite',
    description: 'Maîtrisez les fondamentaux de l\'expérience utilisateur et du design d\'interface.',
    duration: '8 semaines',
    students: 540,
    price: 40000,
    skills: ['Figma', 'Recherche utilisateur', 'Wireframing', 'Prototypage']
  },
  {
    id: 12,
    title: 'Certification Leadership',
    category: 'leadership',
    description: 'Développez vos compétences de leader et管理的能力.',
    duration: '6 semaines',
    students: 380,
    price: 25000,
    skills: ['Management', 'Communication', 'Gestion d\'équipe', 'Prise de décision']
  },
];

export default function CertificationsPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'Toutes les certifications' },
    { id: 'anglais', name: 'Anglais' },
    { id: 'techniques', name: 'Compétences Techniques' },
    { id: 'employabilite', name: 'Employabilité' },
    { id: 'stem', name: 'STEM' },
    { id: 'inclusion', name: 'Inclusion' },
    { id: 'communaute', name: 'Éducation Communautaire' },
    { id: 'ope', name: 'Programme OPE' },
    { id: 'leadership', name: 'Leadership' },
  ];

  const filteredCertifications = certifications.filter(cert => {
    const matchesCategory = activeCategory === 'all' || cert.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Navigation />
      
      {/* Hero */}
      <section className="pt-56 pb-16 bg-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-dark mb-6">Nos Certifications</h1>
            <p className="text-2xl text-gray-600 mb-8">
              Validez vos compétences et booster votre carrière avec nos certifications reconnues
            </p>
            
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Rechercher une certification..."
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

      {/* Certifications Grid */}
      <section className="py-16 bg-light">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCertifications.map((cert) => (
              <div key={cert.id} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center gap-2 text-lg font-medium text-blue-600 mb-3">
                    <Award size={20} />
                    <span>{categories.find(c => c.id === cert.category)?.name}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-dark mb-3">
                    {cert.title}
                  </h3>
                  
                  <p className="text-gray-600 text-lg mb-5">
                    {cert.description}
                  </p>
                  
                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {cert.skills.slice(0, 3).map((skill, idx) => (
                      <span key={idx} className="text-sm bg-gray-100 text-gray-600 px-3 py-1.5 rounded-lg">
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  {/* Meta */}
                  <div className="flex items-center justify-between text-lg text-gray-500 mb-5 pt-4 border-t">
                    <div className="flex items-center gap-2">
                      <Clock size={20} />
                      <span>{cert.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users size={20} />
                      <span>{cert.students}</span>
                    </div>
                  </div>
                  
                  {/* Price & CTA */}
                  <div className="flex items-center justify-between">
                    <div>
                      {cert.price === 0 ? (
                        <span className="text-2xl font-bold text-green-600">Gratuit</span>
                      ) : (
                        <span className="text-2xl font-bold text-blue-600">{cert.price.toLocaleString()} XOF</span>
                      )}
                    </div>
                    <Link 
                      href={`/formations/${cert.id}`}
                      className="flex items-center gap-2 text-blue-600 font-medium hover:underline"
                    >
                      Détails <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredCertifications.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">Aucune certification ne correspond a votre recherche.</p>
            </div>
          )}
        </div>
      </section>

      {/* Why Certify */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Pourquoi obtenir une certification ?</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="text-blue-600" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">Reconnaissance</h3>
                <p className="text-gray-600">Nos certifications sont reconnues par les employeurs au Benin</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="text-green-600" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">Compétences validées</h3>
                <p className="text-gray-600">Démontrez vos compétences aux employeurs potentiels</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-purple-600" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">Carrière accelerée</h3>
                <p className="text-gray-600">Augmentez vos chances d'embauche et d'évolution</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
