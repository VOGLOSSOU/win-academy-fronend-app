'use client';

import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    formations: [
      { href: '/formations/developpement-web', label: 'Développement Web' },
      { href: '/formations/developpement-mobile', label: 'Développement Mobile' },
      { href: '/formations/data-science', label: 'Data Science' },
      { href: '/formations/marketing-digital', label: 'Marketing Digital' },
      { href: '/formations/design-graphique', label: 'Design Graphique' },
      { href: '/formations/cloud-devops', label: 'Cloud & DevOps' },
    ],
    legal: [
      { href: '/mentions-legales', label: 'Mentions légales' },
      { href: '/politique-confidentialite', label: 'Politique de confidentialité' },
      { href: '/conditions-utilisation', label: "Conditions d'utilisation" },
      { href: '/faq', label: 'FAQ' },
    ],
  };

  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="logo">
                <span>W</span>
              </div>
              <span className="text-xl font-bold">Win Academy</span>
            </Link>
            <p className="text-gray-400 mb-6">
              La plateforme EdTech béninoise dédiée à la maîtrise du digital, accessible même avec une connexion modeste.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
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
                <Link href="/formations" className="text-gray-400 hover:text-primary transition-colors">
                  Formations
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
                <MapPin size={20} className="text-primary" />
                <span>Cotonou, Bénin</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone size={20} className="text-primary" />
                <span>+229 XX XX XX XX</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail size={20} className="text-primary" />
                <span>contact@winacademy.bj</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Win Academy. Tous droits réservés.
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
