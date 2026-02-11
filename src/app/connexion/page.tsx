'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { useAuthStore } from '@/store/authStore';

export default function ConnexionPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  
  const router = useRouter();
  const { login, isLoading } = useAuthStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    try {
      await login(email, password);
      router.push('/');
    } catch (err) {
      setError('Email ou mot de passe incorrect');
    }
  };

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-24 pb-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-dark mb-2">Bienvenue</h1>
              <p className="text-gray-600">Connectez-vous à votre compte</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="bg-red-50 text-red-600 p-4 rounded-lg text-sm">
                    {error}
                  </div>
                )}

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary"
                      placeholder="votre@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Mot de passe
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-12 pr-12 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary"
                      placeholder="••••••••"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary" />
                    <span className="text-gray-600 text-sm">Se souvenir de moi</span>
                  </label>
                  <Link href="/mot-de-passe-oublie" className="text-primary text-sm hover:underline">
                    Mot de passe oublié ?
                  </Link>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors disabled:opacity-50"
                >
                  {isLoading ? 'Connexion...' : 'Se connecter'}
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-gray-600">
                  Pas encore de compte ?{' '}
                  <Link href="/inscription" className="text-primary font-medium hover:underline">
                    S'inscrire
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
