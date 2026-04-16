'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    formations: [
      { href: '/formations?category=anglais', label: 'Anglais' },
      { href: '/formations?category=techniques', label: 'Compétences Techniques' },
      { href: '/formations?category=employabilite', label: 'Employabilité' },
      { href: '/formations?category=stem', label: 'STEM' },
      { href: '/formations?category=inclusion', label: 'Inclusion' },
      { href: '/formations?category=communaute', label: 'Éducation Communautaire' },
      { href: '/formations?category=ope', label: 'Programme OPE' },
    ],
    certifications: [
      { href: '/certifications?category=anglais', label: 'Certification Anglais' },
      { href: '/certifications?category=techniques', label: 'Compétences Techniques' },
      { href: '/certifications?category=employabilite', label: 'Employabilité' },
      { href: '/certifications?category=stem', label: 'STEM' },
      { href: '/certifications?category=inclusion', label: 'Inclusion' },
      { href: '/certifications?category=communaute', label: 'Éducation Communautaire' },
      { href: '/certifications?category=ope', label: 'Programme OPE' },
    ],
    legal: [
      { href: '/mentions-legales', label: 'Mentions légales' },
      { href: '/politique-confidentialite', label: 'Politique de confidentialité' },
      { href: '/conditions-utilisation', label: "Conditions d'utilisation" },
      { href: '/a-propos#faq', label: 'FAQ' },
    ],
  };

  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Image
                src="/images/Logo wurami.png"
                alt="Wurami Innovative Hub"
                width={100}
                height={40}
                className="h-auto w-auto"
              />
            </Link>
            <p className="text-gray-400 mb-6">
              La plateforme EdTech béninoise dédiée à la maîtrise du digital, accessible même avec une connexion modeste.
            </p>
          </div>

          {/* Formations */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Nos Formations</h4>
            <ul className="space-y-4">
              {footerLinks.formations.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Nos Certifications</h4>
            <ul className="space-y-4">
              {footerLinks.certifications.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Liens rapides */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Liens rapides</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-gray-400 hover:text-primary transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/plateforme" className="text-gray-400 hover:text-primary transition-colors">
                  Notre Plateforme
                </Link>
              </li>
              <li>
                <Link href="/formations" className="text-gray-400 hover:text-primary transition-colors">
                  Formations
                </Link>
              </li>
              <li>
                <Link href="/cyber-incubator-229" className="text-gray-400 hover:text-primary transition-colors">
                  Cyber Incubator 229
                </Link>
              </li>
              <li>
                <Link href="/partenaires" className="text-gray-400 hover:text-primary transition-colors">
                  Partenaires
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="text-gray-400 hover:text-primary transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/connexion" className="text-gray-400 hover:text-primary transition-colors">
                  Connexion
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-400">
                <MapPin size={20} className="text-white" />
                <span>Bénin</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone size={20} className="text-white" />
                <span>+229 01 60 89 08 08</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail size={20} className="text-white" />
                <span>wuramiteam@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Wurami Innovative Hub. Tous droits réservés.
            </p>
            <div className="flex gap-6 flex-wrap justify-center">
              {footerLinks.legal.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href} 
                  className="text-gray-400 text-sm hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
