'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, User } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/formations', label: 'Formations' },
  { href: '/a-propos', label: 'À propos' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <nav className="container mx-auto px-4 py-4">
        <div className="navigation">
          {/* Logo */}
          <Link href="/" className="nav_left">
            <div className="logo">
              <span>W</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <ul className="nav_menu">
            {navLinks.map((link) => (
              <li key={link.href} className="nav_list">
                <Link href={link.href} className="nav_link">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="nav_right">
            <Link href="/connexion" className="btn-login">
              <User size={20} />
            </Link>
            <button
              className="mobile_menu_toggle"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="nav_menu active md:hidden">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav_link"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
