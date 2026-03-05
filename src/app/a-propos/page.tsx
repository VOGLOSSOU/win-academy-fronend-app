'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FAQSection from '@/components/FAQSection';
import { Award, Heart, Target, Zap, Globe, Users, Smartphone, MapPin } from 'lucide-react';

// Données des activités avec animations
const activities = [
  {
    image: '/images/eleves-entrain-de-suivre-une-formation-avec-ordinateur.jpg',
    title: 'Formation digitale sur mesure',
    description: 'Nos élèves adolescents suivent une formation aux compétences digitales avec des ordinateurs mis à leur disposition par Wurami. Vêtus de leur tenue kaki, ils s\'immergent dans l\'apprentissage du numérique.',
  },
  {
    image: '/images/photo-du-personnel-avec-des-gens-sur-une-lagune-dans-un-bateau.jpg',
    title: 'L\'équipe Wurami au cœur des territoires',
    description: 'L\'équipe Wurami en compagnie de jeunes bénéficie des programmes de Wurami, sur une pirogue, en pleine exploration des villages lacustres pour atteindre les zones les plus reculées.',
  },
  {
    image: '/images/photo-d-eleve-sur-un-village-lacustre.jpg',
    title: 'L\'apprentissage en action',
    description: 'Des élèves en tenue kaki, photographiés à l\'entrée de leur salle de formation, après une séance de formation animée par Wurami dans un village lacustre.',
  },
];

// Composant avec animation au scroll
function AnimatedSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-16'
      }`}
    >
      {children}
    </div>
  );
}

export default function AProposPage() {
  const values = [
    {
      icon: Heart,
      title: 'Inclusion',
      description: 'Nous croyons que l\'éducation numérique doit être accessible à tous, sans distinction de lieu ou de moyens.',
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'Nous proposons des formations structurées et de qualité pour garantir une apprentissage efficace.',
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Nous adaptons constamment nos méthodes aux réalités locales pour maximiser l\'impact.',
    },
    {
      icon: Globe,
      title: 'Ancrage local',
      description: 'Nous sommes entièrement dédiés à l\'éducation des jeunes béninois et africains.',
    },
  ];

  const team = [
    {
      name: 'Nathan VOGLOSSOU',
      role: 'Fondateur & Directeur',
      image: '/images/team-1.png',
    },
    {
      name: 'Équipe Wurami',
      role: 'Éducateurs & Développeurs',
      image: '/images/team-2.png',
    },
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-56 pb-16 bg-light">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="section-title-main mb-6 text-dark">À propos de Wurami E-Learning</h1>
              <p className="section-description text-gray-600">
                Wurami E-Learning démocratise l'accès à l'éducation numérique pour les élèves des zones défavorisées du Bénin.
              </p>
            </div>
          </div>
        </section>

        {/* Notre Mission */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="presentation-grid">
              <div className="presentation-content">
                <h3 className="text-2xl font-bold mb-4">Notre Mission</h3>
                <p className="mb-4">
                  Wurami E-Learning est une plateforme EdTech béninoise née d'une conviction simple : 
                  chaque jeune béninois, où qu'il soit, mérite accès à une éducation numérique de qualité.
                </p>
                <p className="mb-4">
                  Face au fossé numérique qui sépare les zones urbaines des régions rurales, 
                  nous avons créé une solution adaptée aux réalités locales, optimisée pour les connexions limitées 
                  et accessible sur smartphone.
                </p>
                <p>
                  Notre objectif : former 20 000+ apprenants d'ici 2026 et devenir la référence 
                  de l'éducation numérique au Bénin.
                </p>
              </div>
              <div className="presentation-image">
                <Image
                  src="/images/win-mission.png"
                  alt="Wurami E-Learning Mission"
                  width={600}
                  height={500}
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Pourquoi Wurami E-Learning */}
        <section className="py-16 bg-light">
          <div className="container mx-auto px-4">
            <div className="section-header">
              <h2 className="section-title-main">Pourquoi Wurami E-Learning ?</h2>
              <p className="section-subtitle">Une approche pensée pour les réalités béninoises</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Users,
                  title: 'Public cible',
                  text: 'Élèves du Nord Bénin et zones rurales',
                },
                {
                  icon: Zap,
                  title: 'Optimisation',
                  text: 'Fonctionne avec faible connexion internet',
                },
                {
                  icon: Smartphone,
                  title: 'Mobile-first',
                  text: 'Conçu pour les smartphones basiques',
                },
                {
                  icon: Award,
                  title: 'Certification',
                  text: 'Attestations avec QR code unique',
                },
                {
                  icon: Target,
                  title: 'Parcours structurés',
                  text: 'Modules progressifs avec évaluations',
                },
                {
                  icon: Heart,
                  title: 'Gratuit',
                  text: 'Accès aux formations de base gratuit',
                },
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                  <div className="w-12 h-12 rounded-lg bg-primary-light flex items-center justify-center mb-4">
                    <item.icon className="text-primary" size={24} />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                  <p className="text-gray-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Nos Valeurs */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="section-header">
              <h2 className="section-title-main">Nos Valeurs</h2>
              <p className="section-subtitle">Les principes qui guident notre action</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div key={index} className="text-center p-6">
                  <div className="w-16 h-16 mx-auto rounded-full bg-primary-light flex items-center justify-center mb-4">
                    <value.icon className="text-primary" size={32} />
                  </div>
                  <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Notre Histoire */}
        <section className="py-16 bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="section-title-main mb-6">Notre Histoire</h2>
              <p className="text-gray-600 mb-4">
                Wurami E-Learning est née de la rencontre entre deux constats :
              </p>
              <p className="text-gray-600 mb-4">
                D'une part, le potentiel immense des jeunes béninois, plein d'ambitions et de talents. 
                D'autre part, les obstacles majeurs qui se dressent sur leur chemin : 
                manque d'accès à une formation de qualité, connexions internet limitées, 
                et peu de repères dans le monde numérique.
              </p>
              <p className="text-gray-600 mb-4">
                Face à ces défis, nous avons décidé d'agir. En créant Wurami E-Learning, 
                notre ambition est de lever ces barrières et de donner à chaque jeune 
                les clés pour réussir dans l'économie numérique de demain.
              </p>
              <p className="text-gray-600">
                Aujourd'hui, nous sommes fiers de proposer une plateforme conçue 
                par des Béninois, pour les Béninois.
              </p>
            </div>
          </div>
        </section>

        {/* Nos Activités */}
        <section className="py-20 bg-light">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">Nos Activités sur le Terrain</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Découvrez comment Wurami E-Learning agit au quotidien pour atteindre les jeunes dans les zones les plus reculées du Bénin
              </p>
            </div>

            <div className="space-y-16">
              {activities.map((activity, index) => (
                <AnimatedSection key={index} delay={index * 200}>
                  <div className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-16`}>
                    {/* Image */}
                    <div className="w-full md:w-1/2">
                      <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <Image
                          src={activity.image}
                          alt={activity.title}
                          width={600}
                          height={400}
                          className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="w-full md:w-1/2">
                      <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
                        <MapPin className="text-primary" size={16} />
                        <span className="text-primary font-medium text-sm">Activité {index + 1}</span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-dark mb-4">
                        {activity.title}
                      </h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        {activity.description}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { number: '5,000+', label: 'Apprenants' },
                { number: '50+', label: 'Formations' },
                { number: '10+', label: 'Partenaires' },
                { number: '2024', label: 'Année de création' },
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection />

        {/* Call to Action */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Rejoignez l'aventure Wurami E-Learning</h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Vous voulez faire partie de notre mission ? Inscrivez-vous dès maintenant 
              et apprenez les compétences numériques qui changeront votre avenir.
            </p>
            <div className="flex justify-center gap-4">
              <a href="/inscription" className="px-8 py-3 bg-white text-primary rounded-full font-medium hover:bg-gray-100 transition-colors">
                S'inscrire gratuitement
              </a>
              <a href="/formations" className="px-8 py-3 border-2 border-white text-white rounded-full font-medium hover:bg-white hover:text-primary transition-colors">
                Voir nos formations
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
