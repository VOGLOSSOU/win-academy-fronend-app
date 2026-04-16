'use client';

import { useEffect, useRef, useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import {
  Shield,
  ShieldCheck,
  ShieldAlert,
  Lock,
  Server,
  Globe,
  Users,
  Target,
  BarChart2,
  Award,
  BookOpen,
  Briefcase,
  Layers,
  AlertOctagon,
  Building2,
  GraduationCap,
  Mail,
  ArrowRight,
  CheckCircle2,
  Network,
  Cpu,
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
      { threshold: 0.12 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {children}
    </div>
  );
}

export default function CyberIncubator229Page() {

  const pillars = [
    {
      icon: Network,
      number: '01',
      title: 'Formation technique intensive',
      items: [
        'Sécurité des réseaux',
        'Protection des données personnelles',
        'Détection d\'intrusion',
        'Cryptographie appliquée',
        'Sécurité des systèmes d\'information',
      ],
    },
    {
      icon: Briefcase,
      number: '02',
      title: 'Accompagnement entrepreneurial',
      items: [
        'Structuration du modèle économique',
        'Identification des marchés cibles',
        'Préparation au pitch',
        'Accès au financement',
      ],
    },
    {
      icon: Layers,
      number: '03',
      title: 'Incubation de startups',
      items: [
        'Développement de prototypes',
        'Tests en conditions réelles',
        'Validation marché',
        'Accompagnement vers la commercialisation',
      ],
    },
  ];

  const results = [
    {
      icon: Building2,
      label: 'Startups accompagnées',
      detail: 'dans le département des Collines (Bénin)',
    },
    {
      icon: Cpu,
      label: 'Prototypes fonctionnels',
      detail: 'de solutions cybersécurité développés',
    },
    {
      icon: BarChart2,
      label: 'Modèles économiques',
      detail: 'clarifiés et validés par des experts',
    },
    {
      icon: Award,
      label: 'Bénéficiaires certifiés',
      detail: 'en compétences techniques reconnues',
    },
  ];

  const partners = [
    {
      icon: ShieldCheck,
      title: 'Entreprises de cybersécurité',
      description:
        'Souhaitant développer une présence ou des solutions adaptées aux marchés africains.',
    },
    {
      icon: GraduationCap,
      title: 'Écoles & universités',
      description:
        'Spécialisées en cybersécurité pour des curricula communs et certifications reconnues.',
    },
    {
      icon: Building2,
      title: 'Investisseurs & fonds',
      description:
        'Intéressés par l\'innovation numérique en Afrique francophone.',
    },
  ];

  const threats = [
    { icon: AlertOctagon, label: 'Fraudes en ligne' },
    { icon: Server,        label: 'Piratage de systèmes bancaires' },
    { icon: Lock,          label: 'Violations de données personnelles' },
    { icon: ShieldAlert,   label: 'Attaques sur infrastructures critiques' },
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen">

        {/* ────────────────── HERO ────────────────── */}
        <section className="pt-52 pb-24 bg-primary relative overflow-hidden">
          {/* motif géométrique fond */}
          <div className="absolute inset-0 opacity-5 pointer-events-none"
            style={{
              backgroundImage: `repeating-linear-gradient(
                0deg, transparent, transparent 40px, white 40px, white 41px),
                repeating-linear-gradient(
                90deg, transparent, transparent 40px, white 40px, white 41px)`,
            }}
          />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full -translate-y-1/3 translate-x-1/3 pointer-events-none" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">

              {/* badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-widest px-5 py-2 rounded-full mb-8">
                <Shield size={14} />
                Programme phare · Wurami Innovative Hub
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight tracking-tight">
                Cyber Incubator 229
              </h1>
              <p className="text-xl md:text-2xl text-white/75 font-light mb-8 tracking-wide">
                Securing Africa&apos;s Digital Future
              </p>
              <p className="text-white/65 text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
                Le programme dédié à l&apos;émergence d&apos;une filière locale de cybersécurité au Bénin,
                conçu pour des porteurs de projets qui souhaitent bâtir des solutions adaptées
                aux réalités du continent africain.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#programme"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-primary rounded-lg font-semibold text-sm hover:bg-gray-50 transition-colors"
                >
                  Découvrir le programme
                  <ArrowRight size={16} />
                </a>
                <a
                  href="#partenaires"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-white/30 text-white rounded-lg font-semibold text-sm hover:bg-white/10 transition-colors"
                >
                  Devenir partenaire
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ────────────────── DÉFINITION ────────────────── */}
        <section className="py-20 bg-white" id="programme">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <div className="max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row items-start gap-10">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-2xl bg-primary flex items-center justify-center shadow-lg">
                      <Shield className="text-white" size={36} />
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">
                      À propos du programme
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-dark mb-5 leading-snug">
                      Qu&apos;est-ce que le Cyber Incubator 229 ?
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      Le <strong className="text-dark">Cyber Incubator 229</strong> est le programme phare de Wurami
                      dédié à l&apos;émergence d&apos;une filière locale de cybersécurité au Bénin.
                      Il s&apos;adresse à des porteurs de projets et jeunes entrepreneurs qui souhaitent
                      créer des solutions de cybersécurité adaptées aux réalités africaines.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ────────────────── CONTEXTE & ENJEUX ────────────────── */}
        <section className="py-20 bg-light">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <div className="max-w-4xl mx-auto">
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3 text-center">
                  Contexte
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-dark text-center mb-5">
                  Pourquoi ce programme est nécessaire
                </h2>
                <p className="text-gray-600 text-lg text-center mb-14 max-w-3xl mx-auto leading-relaxed">
                  L&apos;Afrique connaît une digitalisation rapide et massive. Avec elle, les cybermenaces
                  se multiplient. Face à cette réalité, le Bénin — comme beaucoup de pays africains —
                  manque encore d&apos;une offre locale structurée en cybersécurité.{' '}
                  <strong className="text-dark">Le Cyber Incubator 229 est une réponse concrète à ce besoin.</strong>
                </p>
              </div>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
              {threats.map((threat, index) => (
                <AnimatedSection key={index} delay={index * 80 + 100}>
                  <div className="bg-white rounded-xl p-6 border-l-4 border-red-500 shadow-sm">
                    <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center mb-4">
                      <threat.icon className="text-red-500" size={20} />
                    </div>
                    <p className="text-sm font-semibold text-gray-800">{threat.label}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ────────────────── 3 PILIERS ────────────────── */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <div className="max-w-4xl mx-auto mb-14 text-center">
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">
                  Offre de programme
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
                  Ce que le programme propose
                </h2>
                <p className="text-gray-500 text-lg">
                  Trois piliers complémentaires pour former les acteurs de la cybersécurité africaine
                </p>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {pillars.map((pillar, index) => (
                <AnimatedSection key={index} delay={index * 120}>
                  <div className="border border-gray-100 rounded-2xl p-8 h-full hover:shadow-lg transition-shadow">
                    {/* numéro + icône */}
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-4xl font-black text-gray-100 leading-none select-none">
                        {pillar.number}
                      </span>
                      <div className="w-11 h-11 rounded-xl bg-primary-light flex items-center justify-center">
                        <pillar.icon className="text-primary" size={22} />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-dark mb-5">{pillar.title}</h3>
                    <ul className="space-y-2.5">
                      {pillar.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={16} />
                          <span className="text-gray-600 text-sm leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ────────────────── RÉSULTATS VISÉS ────────────────── */}
        <section className="py-20 bg-primary">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <div className="text-center mb-14">
                <p className="text-xs font-bold uppercase tracking-widest text-white/50 mb-3">
                  Impact attendu
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Résultats visés</h2>
                <p className="text-white/60 text-lg">
                  Des impacts concrets et mesurables pour l&apos;écosystème béninois
                </p>
              </div>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
              {results.map((result, index) => (
                <AnimatedSection key={index} delay={index * 80}>
                  <div className="bg-white/10 border border-white/15 rounded-2xl p-7">
                    <div className="w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center mb-5">
                      <result.icon className="text-white" size={22} />
                    </div>
                    <p className="text-white font-bold text-base mb-1 leading-snug">{result.label}</p>
                    <p className="text-white/50 text-xs leading-relaxed">{result.detail}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ────────────────── PARTENAIRES ────────────────── */}
        <section className="py-20 bg-white" id="partenaires">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <div className="max-w-4xl mx-auto mb-14 text-center">
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">
                  Appel à partenariat
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
                  Partenaires recherchés
                </h2>
                <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                  Nous recherchons activement des partenaires internationaux pour renforcer
                  l&apos;écosystème cybersécurité en Afrique francophone
                </p>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-14">
              {partners.map((partner, index) => (
                <AnimatedSection key={index} delay={index * 120}>
                  <div className="rounded-2xl p-8 border border-gray-100 hover:border-primary/30 hover:shadow-md transition-all h-full">
                    <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center mb-5">
                      <partner.icon className="text-primary" size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-dark mb-3">{partner.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{partner.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            {/* Bloc contact */}
            <AnimatedSection delay={200}>
              <div className="bg-light rounded-2xl p-10 md:p-14 max-w-3xl mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-primary flex items-center justify-center shadow">
                    <Mail className="text-white" size={28} />
                  </div>
                  <div className="text-center md:text-left flex-1">
                    <h3 className="text-xl font-bold text-dark mb-2">Intéressé par un partenariat ?</h3>
                    <p className="text-gray-500 text-sm mb-5">
                      Contactez-nous pour discuter des modalités de collaboration
                      et rejoindre le Cyber Incubator 229.
                    </p>
                    <a
                      href="mailto:wuramiteam@gmail.com"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
                    >
                      <Mail size={16} />
                      wuramiteam@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ────────────────── CTA FINAL ────────────────── */}
        <section className="py-16 bg-dark">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <Target className="text-primary" size={22} />
                    <span className="text-white/50 text-xs uppercase tracking-widest font-semibold">
                      Mission Wurami
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white leading-snug">
                    Ensemble, sécurisons l&apos;avenir numérique de l&apos;Afrique
                  </h2>
                  <p className="text-white/40 text-sm mt-3 leading-relaxed">
                    Le Cyber Incubator 229 est une opportunité unique de contribuer à la souveraineté
                    numérique du Bénin et du continent africain.
                  </p>
                </div>
                <div className="flex flex-col gap-3 flex-shrink-0">
                  <a
                    href="/a-propos"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity whitespace-nowrap"
                  >
                    En savoir plus sur Wurami
                    <ArrowRight size={15} />
                  </a>
                  <a
                    href="/formations"
                    className="inline-flex items-center justify-center px-6 py-3 border border-white/20 text-white/70 rounded-lg font-semibold text-sm hover:border-white/50 hover:text-white transition-colors whitespace-nowrap"
                  >
                    Voir nos formations
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
