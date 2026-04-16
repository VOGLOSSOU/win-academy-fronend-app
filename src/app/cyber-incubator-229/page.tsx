'use client';

import { useEffect, useRef, useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import {
  Shield,
  ShieldCheck,
  Lock,
  Server,
  Globe,
  Users,
  Target,
  TrendingUp,
  Award,
  BookOpen,
  Briefcase,
  Rocket,
  AlertTriangle,
  Building,
  GraduationCap,
  Mail,
} from 'lucide-react';

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
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
      }`}
    >
      {children}
    </div>
  );
}

export default function CyberIncubator229Page() {
  const pillars = [
    {
      icon: BookOpen,
      title: 'Formation technique intensive',
      description:
        'Sécurité des réseaux, protection des données, détection d\'intrusion, cryptographie appliquée, sécurité des systèmes d\'information.',
    },
    {
      icon: Briefcase,
      title: 'Accompagnement entrepreneurial',
      description:
        'Structuration du modèle économique, identification des marchés cibles, pitch et accès au financement.',
    },
    {
      icon: Rocket,
      title: 'Incubation de startups',
      description:
        'Développement de prototypes, tests en conditions réelles, accompagnement vers la commercialisation.',
    },
  ];

  const results = [
    {
      icon: Users,
      label: 'Startups accompagnées',
      detail: 'dans le département des Collines (Bénin)',
    },
    {
      icon: ShieldCheck,
      label: 'Prototypes fonctionnels',
      detail: 'de solutions cybersécurité développés',
    },
    {
      icon: TrendingUp,
      label: 'Modèles économiques',
      detail: 'clarifiés et validés',
    },
    {
      icon: Award,
      label: 'Bénéficiaires certifiés',
      detail: 'en compétences techniques',
    },
  ];

  const partners = [
    {
      icon: Shield,
      title: 'Entreprises de cybersécurité',
      description:
        'Souhaitant développer une présence ou des solutions adaptées au marché africain.',
    },
    {
      icon: GraduationCap,
      title: 'Écoles & universités',
      description:
        'Spécialisées en cybersécurité pour des curricula communs et des certifications reconnues.',
    },
    {
      icon: Building,
      title: 'Investisseurs & fonds',
      description:
        'Intéressés par l\'innovation numérique en Afrique francophone.',
    },
  ];

  const threats = [
    { icon: AlertTriangle, label: 'Fraudes en ligne' },
    { icon: Server, label: 'Piratage de systèmes bancaires' },
    { icon: Lock, label: 'Violations de données personnelles' },
    { icon: Globe, label: 'Attaques sur infrastructures critiques' },
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen">

        {/* ── HERO ── */}
        <section className="pt-56 pb-20 bg-primary relative overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-sm font-medium px-4 py-2 rounded-full mb-6">
                <Shield size={16} />
                Programme phare · Wurami Innovative Hub
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                Cyber Incubator 229
              </h1>
              <p className="text-xl md:text-2xl text-white/80 font-medium mb-6">
                Securing Africa&apos;s Digital Future
              </p>
              <p className="text-white/70 text-lg max-w-2xl mx-auto mb-10">
                Le programme dédié à l&apos;émergence d&apos;une filière locale de cybersécurité au Bénin,
                pour des solutions adaptées aux réalités africaines.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#programme"
                  className="px-8 py-3 bg-white text-primary rounded-full font-semibold hover:bg-gray-100 transition-colors"
                >
                  Découvrir le programme
                </a>
                <a
                  href="#partenaires"
                  className="px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-primary transition-colors"
                >
                  Devenir partenaire
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── QU'EST-CE QUE C'EST ── */}
        <section className="py-20 bg-white" id="programme">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <div className="max-w-3xl mx-auto text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-primary-light flex items-center justify-center mb-6">
                  <Shield className="text-primary" size={32} />
                </div>
                <h2 className="section-title-main mb-6">Qu&apos;est-ce que le Cyber Incubator 229 ?</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Le <strong>Cyber Incubator 229</strong> est le programme phare de Wurami dédié à l&apos;émergence
                  d&apos;une filière locale de cybersécurité au Bénin. Il s&apos;adresse à des porteurs de projets
                  et jeunes entrepreneurs qui souhaitent créer des solutions de cybersécurité adaptées
                  aux réalités africaines.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ── POURQUOI ── */}
        <section className="py-20 bg-light">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <div className="section-header">
                <h2 className="section-title-main">Pourquoi ce programme ?</h2>
                <p className="section-subtitle">L&apos;Afrique face à un défi cybersécurité sans précédent</p>
              </div>
            </AnimatedSection>

            <div className="max-w-4xl mx-auto">
              <AnimatedSection delay={100}>
                <p className="text-gray-600 text-lg text-center mb-12 leading-relaxed">
                  L&apos;Afrique connaît une digitalisation rapide et massive. Avec elle, les cybermenaces
                  se multiplient. Face à cette réalité, le Bénin — comme beaucoup de pays africains —
                  manque encore d&apos;une offre locale structurée en cybersécurité.{' '}
                  <strong className="text-dark">Le Cyber Incubator 229 est une réponse concrète à ce besoin.</strong>
                </p>
              </AnimatedSection>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {threats.map((threat, index) => (
                  <AnimatedSection key={index} delay={index * 100 + 200}>
                    <div className="bg-white rounded-2xl p-6 shadow-md border border-red-50 text-center">
                      <div className="w-12 h-12 mx-auto rounded-lg bg-red-50 flex items-center justify-center mb-4">
                        <threat.icon className="text-red-500" size={24} />
                      </div>
                      <p className="text-sm font-medium text-gray-700">{threat.label}</p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CE QUE LE PROGRAMME PROPOSE ── */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <div className="section-header">
                <h2 className="section-title-main">Ce que le programme propose</h2>
                <p className="section-subtitle">Trois piliers pour former les acteurs de la cybersécurité africaine</p>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {pillars.map((pillar, index) => (
                <AnimatedSection key={index} delay={index * 150}>
                  <div className="bg-light rounded-2xl p-8 h-full">
                    <div className="w-14 h-14 rounded-xl bg-primary-light flex items-center justify-center mb-5">
                      <pillar.icon className="text-primary" size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-dark mb-3">{pillar.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{pillar.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── RÉSULTATS VISÉS ── */}
        <section className="py-20 bg-primary">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <div className="text-center mb-14">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Résultats visés</h2>
                <p className="text-white/70 text-lg">Des impacts concrets et mesurables pour l&apos;écosystème béninois</p>
              </div>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {results.map((result, index) => (
                <AnimatedSection key={index} delay={index * 100}>
                  <div className="bg-white/10 border border-white/20 rounded-2xl p-6 text-center">
                    <div className="w-12 h-12 mx-auto rounded-full bg-white/20 flex items-center justify-center mb-4">
                      <result.icon className="text-white" size={24} />
                    </div>
                    <p className="text-white font-bold text-lg mb-1">{result.label}</p>
                    <p className="text-white/60 text-sm">{result.detail}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── PARTENAIRES RECHERCHÉS ── */}
        <section className="py-20 bg-white" id="partenaires">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <div className="section-header">
                <h2 className="section-title-main">Partenaires recherchés</h2>
                <p className="section-subtitle">
                  Nous recherchons activement des partenaires internationaux pour renforcer l&apos;écosystème cybersécurité en Afrique
                </p>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-14">
              {partners.map((partner, index) => (
                <AnimatedSection key={index} delay={index * 150}>
                  <div className="border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow h-full">
                    <div className="w-14 h-14 rounded-xl bg-primary-light flex items-center justify-center mb-5">
                      <partner.icon className="text-primary" size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-dark mb-3">{partner.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{partner.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            {/* Contact CTA */}
            <AnimatedSection delay={300}>
              <div className="bg-light rounded-3xl p-10 max-w-2xl mx-auto text-center">
                <div className="w-14 h-14 mx-auto rounded-full bg-primary-light flex items-center justify-center mb-5">
                  <Mail className="text-primary" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-dark mb-3">Intéressé par un partenariat ?</h3>
                <p className="text-gray-600 mb-6">
                  Contactez-nous pour discuter des modalités de collaboration et rejoindre
                  le Cyber Incubator 229.
                </p>
                <a
                  href="mailto:wuramiteam@gmail.com"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white rounded-full font-semibold hover:opacity-90 transition-opacity"
                >
                  <Mail size={18} />
                  wuramiteam@gmail.com
                </a>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ── CTA FINAL ── */}
        <section className="py-16 bg-dark">
          <div className="container mx-auto px-4 text-center">
            <AnimatedSection>
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                  <Target className="text-primary" size={32} />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Ensemble, sécurisons l&apos;avenir numérique de l&apos;Afrique
              </h2>
              <p className="text-white/60 mb-8 max-w-2xl mx-auto">
                Le Cyber Incubator 229 est une opportunité unique de contribuer à la souveraineté
                numérique du Bénin et du continent africain.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/a-propos"
                  className="px-8 py-3 bg-primary text-white rounded-full font-semibold hover:opacity-90 transition-opacity"
                >
                  En savoir plus sur Wurami
                </a>
                <a
                  href="/formations"
                  className="px-8 py-3 border-2 border-white/30 text-white rounded-full font-semibold hover:border-white transition-colors"
                >
                  Voir nos formations
                </a>
              </div>
            </AnimatedSection>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
