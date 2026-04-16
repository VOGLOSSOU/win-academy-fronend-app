'use client';

import { useEffect, useRef, useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Image from 'next/image';
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
        <section className="pt-52 pb-28 relative overflow-hidden">
          {/* Image de fond */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `url('/images/cybersecurity-network-dark.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          />
          {/* Overlay bleu sombre pour lisibilité */}
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(135deg, rgba(5,10,30,0.90) 0%, rgba(24,119,242,0.80) 100%)' }} />

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
                <div className="flex flex-col lg:flex-row items-center gap-14">

                  {/* Texte */}
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center shadow-lg flex-shrink-0">
                        <Shield className="text-white" size={32} />
                      </div>
                      <p className="text-sm font-bold uppercase tracking-widest text-primary">
                        À propos du programme
                      </p>
                    </div>
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

                  {/* Image */}
                  <div className="flex-shrink-0 w-full lg:w-auto">
                    <style>{`
                      @keyframes float {
                        0%, 100% { transform: translateY(0px); }
                        50% { transform: translateY(-14px); }
                      }
                      @keyframes glow-pulse {
                        0%, 100% { box-shadow: 0 0 0 0 rgba(24,119,242,0.35), 0 25px 50px rgba(0,0,0,0.25); }
                        50% { box-shadow: 0 0 0 12px rgba(24,119,242,0), 0 25px 50px rgba(24,119,242,0.3); }
                      }
                      @keyframes ring-rotate {
                        from { transform: rotate(0deg); }
                        to { transform: rotate(360deg); }
                      }
                      .cyber-img-wrapper {
                        animation: float 4s ease-in-out infinite, glow-pulse 3s ease-in-out infinite;
                      }
                      .cyber-img-wrapper:hover {
                        animation-play-state: paused;
                        transform: scale(1.03);
                        transition: transform 0.4s ease;
                      }
                    `}</style>

                    {/* Anneau décoratif rotatif */}
                    <div className="relative" style={{ width: '100%', maxWidth: '480px', margin: '0 auto' }}>
                      <div className="absolute -inset-3 rounded-3xl pointer-events-none" style={{
                        background: 'conic-gradient(from 0deg, #1877F2, #29baf9, transparent, #1877F2)',
                        animation: 'ring-rotate 6s linear infinite',
                        opacity: 0.4,
                        borderRadius: '28px',
                      }} />

                      {/* Image principale */}
                      <div
                        className="cyber-img-wrapper relative rounded-3xl overflow-hidden"
                        style={{ cursor: 'pointer' }}
                      >
                        <Image
                          src="/images/229-cyber-incubator.jpg"
                          alt="Cyber Incubator 229 — Wurami Innovative Hub"
                          width={480}
                          height={360}
                          className="w-full h-auto object-cover"
                          style={{ display: 'block' }}
                        />
                        {/* Overlay dégradé subtil */}
                        <div className="absolute inset-0 pointer-events-none" style={{
                          background: 'linear-gradient(to top, rgba(5,10,30,0.6) 0%, transparent 50%)',
                        }} />
                        {/* Badge flottant */}
                        <div className="absolute bottom-4 left-4 right-4 backdrop-blur-sm rounded-2xl px-5 py-3 flex items-center gap-3" style={{ background: 'rgba(5,10,30,0.75)' }}>
                          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                            <Shield className="text-white" size={16} />
                          </div>
                          <div>
                            <p className="text-white font-bold" style={{ fontSize: '13px' }}>Cyber Incubator 229</p>
                            <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.55)' }}>Wurami Innovative Hub · Bénin</p>
                          </div>
                        </div>
                      </div>
                    </div>
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
                  La digitalisation de l&apos;Afrique s&apos;accélère. Et avec elle, les cybermenaces
                  progressent à un rythme que les pays du continent ne sont pas encore armés pour affronter.
                  Au Bénin, il n&apos;existe pas encore de filière locale solide en cybersécurité.{' '}
                  <span className="text-white font-bold">
                    Le Cyber Incubator 229 est né pour changer ça.
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
        <section className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0a0f1e 0%, #0d1f4e 50%, #0a0f1e 100%)' }}>

          {/* Fond décoratif */}
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(24,119,242,0.12) 0%, transparent 50%),
                              radial-gradient(circle at 80% 50%, rgba(41,186,249,0.08) 0%, transparent 50%)`,
          }} />
          <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(255,255,255,1) 40px, rgba(255,255,255,1) 41px),
                              repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(255,255,255,1) 40px, rgba(255,255,255,1) 41px)`,
          }} />

          <div className="container mx-auto px-4 relative z-10">
            <AnimatedSection>
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 border border-primary/40 text-primary bg-primary/10 rounded-full px-5 py-2 mb-6" style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  Impact attendu
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">Résultats visés</h2>
                <p className="mx-auto font-medium text-white/70" style={{ fontSize: '20px', maxWidth: '680px' }}>
                  Des impacts concrets et mesurables pour l&apos;écosystème béninois
                </p>
              </div>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto" style={{ maxWidth: '1100px' }}>
              {results.map((result, index) => (
                <AnimatedSection key={index} delay={index * 100}>
                  <div
                    className="group relative rounded-2xl p-8 h-full flex flex-col"
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      transition: 'transform 0.3s ease, background 0.3s ease',
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-6px)';
                      (e.currentTarget as HTMLDivElement).style.background = 'rgba(24,119,242,0.12)';
                      (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(24,119,242,0.4)';
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                      (e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.04)';
                      (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.08)';
                    }}
                  >
                    {/* Numéro décoratif */}
                    <span className="absolute top-4 right-5 font-black text-white/5 select-none" style={{ fontSize: '72px', lineHeight: 1 }}>
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    {/* Icône avec glow */}
                    <div className="relative mb-6">
                      <div className="w-16 h-16 rounded-2xl flex items-center justify-center" style={{
                        background: 'linear-gradient(135deg, rgba(24,119,242,0.3), rgba(41,186,249,0.15))',
                        border: '1px solid rgba(24,119,242,0.4)',
                        boxShadow: '0 0 20px rgba(24,119,242,0.2)',
                      }}>
                        <result.icon size={30} style={{ color: '#29baf9' }} />
                      </div>
                    </div>

                    {/* Contenu */}
                    <p className="text-white font-bold mb-3 leading-snug" style={{ fontSize: '20px' }}>
                      {result.label}
                    </p>
                    <p className="text-white/55 leading-relaxed mt-auto" style={{ fontSize: '15px' }}>
                      {result.detail}
                    </p>

                    {/* Ligne de bas */}
                    <div className="absolute bottom-0 left-6 right-6 h-px" style={{
                      background: 'linear-gradient(to right, transparent, rgba(24,119,242,0.5), transparent)',
                    }} />
                  </div>
                </AnimatedSection>
              ))}
            </div>
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
