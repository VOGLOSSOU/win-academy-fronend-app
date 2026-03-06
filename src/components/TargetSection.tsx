'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Users, Accessibility, GraduationCap } from 'lucide-react';

const targets = [
  {
    icon: Users,
    title: 'Jeunes éloignés du numérique',
    description: "Chez Wurami Innovative Hub, nous savons que les jeunes de plus de 15 ans dans les zones rurales et éloignées du Benin n'ont pas accès aux opportunités qu'offre le numérique. Notre plateforme comble ce fossé en leur offrant des formations de qualité, accessibles même avec une connexion limitées. Nous permettons à ces jeunes de développer des compétences digitales qui transformeront leur avenir et celui de leur communauté.",
    image: '/images/jeunes-éloignes-du-numérique.jpg',
  },
  {
    icon: Accessibility,
    title: 'Personnes en situation de handicap',
    description: "Wurami Innovative Hub s'engage à rendre le numérique accessible à tous. Les personnes en situation de handicap méritent les mêmes opportunités de formation et d'évolution professionnelle. Nos formations sont conçues pour être inclusives, avec des contenus adaptés et des technologies d'assistance. Nous aidons ces personnes à acquérir des compétences numériques qui peuvent transformer leur carrière et leur independence.",
    image: '/images/personnes-en-situation-de-handicap.jpg',
  },
  {
    icon: GraduationCap,
    title: 'Étudiants et jeunes diplômés',
    description: "Les étudiants et jeunes diplômés du Benin font face à un marché du travail de plus en plus compétitif. Wurami Innovative Hub leurs propose des formations adaptées aux réalités du terrain, qui complètent leur parcours académique et leurs rendent véritablement employables. Nos programmes leur permettent de monter en compétence rapidement et d'acquérir une expérience pratique qui fait la différence sur le marché de l'emploi.",
    image: '/images/etudiants-et-jeunes-diplômes.jpg',
  },
];

function AnimatedSection({ children, direction = 'left' }: { children: React.ReactNode; direction?: 'left' | 'right' }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 mb-16 md:mb-24 transition-all duration-1000 ease-out transform ${
        isVisible
          ? 'opacity-100 translate-x-0'
          : `opacity-0 ${direction === 'left' ? '-translate-x-20' : 'translate-x-20'}`
      }`}
    >
      {children}
    </div>
  );
}

export default function TargetSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="target-section" id="cible">
      <div className="container mx-auto px-4">
        <div className="section-header text-center mb-16 md:mb-20">
          <h2 className="section-title-main">Pour qui est faite Wurami Innovative Hub ?</h2>
          <p className="section-subtitle mt-4">Une plateforme conçue pour tous ceux qui veulent maîtriser le numérique au Benin</p>
        </div>
        
        <div className="target-alternating">
          {targets.map((target, index) => (
            <AnimatedSection key={index} direction={index % 2 === 0 ? 'left' : 'right'}>
              {/* Image - Carrée avec effet float */}
              <div className={`w-full md:w-1/2 flex justify-center ${
                index % 2 === 1 ? 'md:order-2' : 'md:order-1'
              }`}>
                <div className="image-float-container relative w-80 h-72 md:w-[560px] md:h-[480px]">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-3xl transform rotate-6 shadow-2xl"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 rounded-3xl transform -rotate-3 shadow-2xl"></div>
                  <div className="absolute inset-2 bg-white rounded-2xl overflow-hidden shadow-xl image-wrapper">
                    <Image
                      src={target.image}
                      alt={target.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg">
                        <p className="text-blue-800 font-bold text-sm text-center">{target.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Content - Texte développé à côté de l'image */}
              <div className={`w-full md:w-1/2 ${index % 2 === 1 ? 'md:order-1' : 'md:order-2'} flex items-center`}>
                <div className="target-text-content">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg flex-shrink-0">
                      <target.icon size={28} className="text-white" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800">{target.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-loose text-2xl md:text-3xl font-sans">{target.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
