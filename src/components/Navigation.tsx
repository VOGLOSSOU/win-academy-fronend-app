'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, User, LogOut } from 'lucide-react';
import { useAuthStore } from '@/store/authStore';

const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/formations', label: 'Formations' },
  { href: '/certifications', label: 'Certifications' },
  { href: '/partenaires', label: 'Partenaires' },
  { href: '/a-propos', label: 'À propos' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isAuthenticated, logout, checkAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  const handleLogout = () => {
    logout();
    window.location.href = '/';
  };

  return (
    <header className="bg-primary">
      <nav className="container mx-auto px-4 py-4">
        <div className="navigation">
          {/* Logo */}
          <Link href="/" className="nav_left">
            <Image
              src="/images/Logo wurami.png"
              alt="Wurami E-Learning"
              width={900}
              height={620}
              className="h-20 w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="nav_menu">
            {navLinks.map((link) => (
              <li key={link.href} className="nav_list">
                <Link href={link.href} className="nav_link text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="nav_right">
            {isAuthenticated && user ? (
              <div className="flex items-center gap-4">
                <Link href="/dashboard" className="bg-white text-primary px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                  {user.firstName}
                </Link>
                <button 
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors flex items-center gap-2"
                >
                  <LogOut size={20} />
                </button>
              </div>
            ) : (
              <Link href="/connexion" className="btn-login bg-white text-primary">
                <User size={20} />
              </Link>
            )}
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
          <div className="nav_menu active md:hidden" style={{ backgroundColor: '#1877F2' }}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav_link text-white"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            {isAuthenticated && user ? (
              <>
                <Link
                  href="/dashboard"
                  className="nav_link text-white"
                  onClick={() => setIsOpen(false)}
                >
                  Mon Dashboard
                </Link>
                <button
                  onClick={() => {
                    handleLogout();
                    setIsOpen(false);
                  }}
                  className="nav_link text-white text-left w-full"
                >
                  Déconnexion
                </button>
              </>
            ) : (
              <Link
                href="/connexion"
                className="nav_link text-white"
                onClick={() => setIsOpen(false)}
              >
                Connexion
              </Link>
            )}
          </div>
        )}
      </nav>
    </header>
  );
}
