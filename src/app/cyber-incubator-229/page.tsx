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
  Users,
  Target,
  BarChart2,
  Award,
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
      { threshold: 0.1 }
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
      accent: false,
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
      accent: true,
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
      accent: false,
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
    {
      icon: AlertOctagon,
      label: 'Fraudes en ligne',
      desc: 'Escroqueries financières, phishing et arnaques numériques qui paralysent les entreprises et particuliers.',
    },
    {
      icon: Server,
      label: 'Piratage de systèmes bancaires',
      desc: 'Attaques ciblant les infrastructures financières, avec des pertes de millions de dollars chaque année.',
    },
    {
      icon: Lock,
      label: 'Violations de données personnelles',
      desc: 'Fuite massive d\'informations sensibles exposant citoyens et organisations à des risques graves.',
    },
    {
      icon: ShieldAlert,
      label: 'Attaques sur infrastructures critiques',
      desc: 'Menaces sur les réseaux d\'énergie, de santé et de communication essentiels à la stabilité nationale.',
    },
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen">

        {/* ────────────────── HERO ────────────────── */}
        <section className="pt-52 pb-28 bg-primary relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-5 pointer-events-none"
            style={{
              backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 40px, white 40px, white 41px),
                repeating-linear-gradient(90deg, transparent, transparent 40px, white 40px, white 41px)`,
            }}
          />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full -translate-y-1/3 translate-x-1/3 pointer-events-none" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="mx-auto text-center" style={{ maxWidth: '860px' }}>
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-sm font-semibold uppercase tracking-widest px-5 py-2.5 rounded-full mb-8">
                <Shield size={16} />
                Programme phare · Wurami Innovative Hub
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-5 leading-tight tracking-tight">
                Cyber Incubator 229
              </h1>
              <p className="text-2xl md:text-3xl text-white/70 font-light mb-8 tracking-wide">
                Securing Africa&apos;s Digital Future
              </p>
              <p className="text-white/90 mx-auto mb-14 leading-relaxed font-medium" style={{ fontSize: '20px' }}>
                Le programme dédié à l&apos;émergence d&apos;une filière locale de cybersécurité au Bénin,
                conçu pour des porteurs de projets qui souhaitent bâtir des solutions
                adaptées aux réalités du continent africain.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#programme"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary rounded-xl font-bold text-base hover:bg-gray-50 transition-colors"
                >
                  Découvrir le programme
                  <ArrowRight size={18} />
                </a>
                <a
                  href="#partenaires"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white rounded-xl font-bold text-base hover:bg-white/10 transition-colors"
                >
                  Devenir partenaire
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ────────────────── DÉFINITION ────────────────── */}
        <section className="py-24 bg-white" id="programme">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <div className="mx-auto" style={{ maxWidth: '1100px' }}>
                <div className="flex flex-col md:flex-row items-start gap-10">
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 rounded-3xl bg-primary flex items-center justify-center shadow-xl">
                      <Shield className="text-white" size={44} />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-widest text-primary mb-4">
                      À propos du programme
                    </p>
                    <h2 className="text-3xl md:text-5xl font-bold text-dark mb-6 leading-tight">
                      Qu&apos;est-ce que le Cyber Incubator 229 ?
                    </h2>
                    <p className="text-gray-800 leading-relaxed font-medium" style={{ fontSize: '20px' }}>
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

        {/* ────────────────── CONTEXTE ────────────────── */}
        <section className="py-24 bg-dark">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <div className="mx-auto text-center mb-16" style={{ maxWidth: '860px' }}>
                <p className="text-sm font-bold uppercase tracking-widest text-primary mb-4">
                  Contexte
                </p>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  Pourquoi ce programme est nécessaire
                </h2>
                <p className="text-white/85 leading-relaxed font-medium" style={{ fontSize: '20px' }}>
                  L&apos;Afrique connaît une digitalisation rapide et massive. Avec elle, les cybermenaces
                  se multiplient. Face à cette réalité, le Bénin — comme beaucoup de pays africains —
                  manque encore d&apos;une offre locale structurée en cybersécurité.{' '}
                  <span className="text-white font-bold">
                    Le Cyber Incubator 229 est une réponse concrète à ce besoin.
                  </span>
                </p>
              </div>
            </AnimatedSection>

            {/* Cartes des menaces — large, contrastées */}
            <div className="grid md:grid-cols-2 gap-5 mx-auto" style={{ maxWidth: '1100px' }}>
              {threats.map((threat, index) => (
                <AnimatedSection key={index} delay={index * 100}>
                  <div className="group rounded-2xl bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-colors">
                    <div className="flex items-start gap-5">
                      <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-red-500/15 border border-red-500/20 flex items-center justify-center">
                        <threat.icon className="text-red-400" size={28} />
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-xl mb-2">{threat.label}</h3>
                        <p className="text-white/80 leading-relaxed font-medium" style={{ fontSize: '17px' }}>{threat.desc}</p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ────────────────── 3 PILIERS ────────────────── */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <div className="mx-auto mb-16 text-center" style={{ maxWidth: '1100px' }}>
                <p className="text-sm font-bold uppercase tracking-widest text-primary mb-4">
                  Offre de programme
                </p>
                <h2 className="text-4xl md:text-5xl font-bold text-dark mb-5">
                  Ce que le programme propose
                </h2>
                <p className="text-gray-700 mx-auto leading-relaxed font-medium" style={{ fontSize: '20px' }}>
                  Trois piliers complémentaires pour former les acteurs de la cybersécurité africaine
                </p>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-6 mx-auto" style={{ maxWidth: '1100px' }}>
              {pillars.map((pillar, index) => (
                <AnimatedSection key={index} delay={index * 120}>
                  <div
                    className={`rounded-2xl p-10 h-full ${
                      pillar.accent
                        ? 'bg-primary text-white'
                        : 'bg-light border border-gray-100'
                    }`}
                  >
                    <div className="flex items-center gap-4 mb-7">
                      <span
                        className={`text-5xl font-black leading-none select-none ${
                          pillar.accent ? 'text-white/20' : 'text-gray-200'
                        }`}
                      >
                        {pillar.number}
                      </span>
                      <div
                        className={`w-13 h-13 w-12 h-12 rounded-xl flex items-center justify-center ${
                          pillar.accent ? 'bg-white/20' : 'bg-primary-light'
                        }`}
                      >
                        <pillar.icon
                          className={pillar.accent ? 'text-white' : 'text-primary'}
                          size={24}
                        />
                      </div>
                    </div>
                    <h3
                      className={`text-xl font-bold mb-6 leading-snug ${
                        pillar.accent ? 'text-white' : 'text-dark'
                      }`}
                    >
                      {pillar.title}
                    </h3>
                    <ul className="space-y-3.5">
                      {pillar.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2
                            className={`flex-shrink-0 mt-0.5 ${
                              pillar.accent ? 'text-white/70' : 'text-primary'
                            }`}
                            size={18}
                          />
                          <span
                            className={`leading-snug font-medium ${
                              pillar.accent ? 'text-white/90' : 'text-gray-700'
                            }`}
                            style={{ fontSize: '17px' }}
                          >
                            {item}
                          </span>
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
        <section className="py-24 bg-primary">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <div className="text-center mb-16">
                <p className="text-sm font-bold uppercase tracking-widest text-white/50 mb-4">
                  Impact attendu
                </p>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Résultats visés</h2>
                <p className="mx-auto font-medium text-white/85" style={{ fontSize: '20px', maxWidth: '700px' }}>
                  Des impacts concrets et mesurables pour l&apos;écosystème béninois
                </p>
              </div>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mx-auto" style={{ maxWidth: '1100px' }}>
              {results.map((result, index) => (
                <AnimatedSection key={index} delay={index * 80}>
                  <div className="bg-white/10 border border-white/15 rounded-2xl p-8 hover:bg-white/15 transition-colors">
                    <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
                      <result.icon className="text-white" size={28} />
                    </div>
                    <p className="text-white font-bold text-xl mb-2 leading-snug">{result.label}</p>
                    <p className="text-white/80 leading-relaxed font-medium" style={{ fontSize: '17px' }}>{result.detail}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ────────────────── PARTENAIRES ────────────────── */}
        <section className="py-24 bg-white" id="partenaires">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <div className="mx-auto mb-16 text-center" style={{ maxWidth: '1100px' }}>
                <p className="text-sm font-bold uppercase tracking-widest text-primary mb-4">
                  Appel à partenariat
                </p>
                <h2 className="text-4xl md:text-5xl font-bold text-dark mb-5">
                  Partenaires recherchés
                </h2>
                <p className="text-gray-700 mx-auto leading-relaxed font-medium" style={{ fontSize: '20px' }}>
                  Nous recherchons activement des partenaires internationaux pour renforcer
                  l&apos;écosystème cybersécurité en Afrique francophone
                </p>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-6 mx-auto mb-14" style={{ maxWidth: '1100px' }}>
              {partners.map((partner, index) => (
                <AnimatedSection key={index} delay={index * 120}>
                  <div className="rounded-2xl p-9 border border-gray-100 hover:border-primary/40 hover:shadow-lg transition-all h-full">
                    <div className="w-14 h-14 rounded-2xl bg-primary-light flex items-center justify-center mb-6">
                      <partner.icon className="text-primary" size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-dark mb-3">{partner.title}</h3>
                    <p className="text-gray-700 leading-relaxed font-medium" style={{ fontSize: '17px' }}>{partner.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            {/* Bloc contact */}
            <AnimatedSection delay={200}>
              <div className="bg-light rounded-3xl p-10 md:p-14 mx-auto" style={{ maxWidth: '900px' }}>
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-shrink-0 w-20 h-20 rounded-3xl bg-primary flex items-center justify-center shadow-lg">
                    <Mail className="text-white" size={36} />
                  </div>
                  <div className="text-center md:text-left flex-1">
                    <h3 className="text-2xl font-bold text-dark mb-3">Intéressé par un partenariat ?</h3>
                    <p className="text-gray-700 mb-6 leading-relaxed font-medium" style={{ fontSize: '18px' }}>
                      Contactez-nous pour discuter des modalités de collaboration
                      et rejoindre le Cyber Incubator 229.
                    </p>
                    <a
                      href="mailto:wuramiteam@gmail.com"
                      className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white rounded-xl font-bold text-base hover:opacity-90 transition-opacity"
                    >
                      <Mail size={18} />
                      wuramiteam@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ────────────────── CTA FINAL ────────────────── */}
        <section className="py-20 bg-dark">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <div className="mx-auto flex flex-col md:flex-row items-center justify-between gap-10" style={{ maxWidth: '1100px' }}>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Target className="text-primary" size={24} />
                    <span className="text-white/50 text-sm uppercase tracking-widest font-bold">
                      Mission Wurami
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white leading-snug mb-4">
                    Ensemble, sécurisons l&apos;avenir numérique de l&apos;Afrique
                  </h2>
                  <p className="text-white/80 leading-relaxed font-medium" style={{ fontSize: '18px' }}>
                    Le Cyber Incubator 229 est une opportunité unique de contribuer
                    à la souveraineté numérique du Bénin et du continent africain.
                  </p>
                </div>
                <div className="flex flex-col gap-4 flex-shrink-0">
                  <a
                    href="/a-propos"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-xl font-bold text-base hover:opacity-90 transition-opacity whitespace-nowrap"
                  >
                    En savoir plus sur Wurami
                    <ArrowRight size={18} />
                  </a>
                  <a
                    href="/formations"
                    className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white/70 rounded-xl font-bold text-base hover:border-white/50 hover:text-white transition-colors whitespace-nowrap"
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
