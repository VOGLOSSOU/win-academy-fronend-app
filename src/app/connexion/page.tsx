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
  const [rememberMe, setRememberMe] = useState(false);
  
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
      <main className="min-h-screen pt-56 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl p-10">
              <div className="text-center mb-10">
                <h1 className="text-4xl font-bold text-dark mb-3">Bienvenue</h1>
                <p className="text-gray-600 text-lg">Connectez-vous à votre compte</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="bg-red-50 text-red-600 p-4 rounded-xl text-sm">
                    {error}
                  </div>
                )}

                <div>
                  <label className="block text-gray-700 font-medium mb-3 text-lg">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={22} />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-14 pr-5 py-4 border border-gray-200 rounded-xl focus:outline-none focus:border-primary bg-gray-50 focus:bg-white transition-colors text-lg"
                      placeholder="votre@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-3 text-lg">
                    Mot de passe
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={22} />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-14 pr-14 py-4 border border-gray-200 rounded-xl focus:outline-none focus:border-primary bg-gray-50 focus:bg-white transition-colors text-lg"
                      placeholder="••••••••"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
                    </button>
                  </div>
                </div>

                <div className="flex justify-between items-center py-2">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input 
                      type="checkbox" 
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary" 
                    />
                    <span className="text-gray-600 text-lg">Se souvenir de moi</span>
                  </label>
                  <Link href="/mot-de-passe-oublie" className="text-primary text-lg hover:underline font-medium">
                    Mot de passe oublié ?
                  </Link>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-4 bg-primary text-white rounded-xl font-semibold text-lg hover:bg-primary/90 transition-colors disabled:opacity-50 shadow-lg hover:shadow-xl transition-shadow mt-4"
                >
                  {isLoading ? 'Connexion...' : 'Se connecter'}
                </button>
              </form>

              <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                <p className="text-gray-600 text-lg">
                  Pas encore de compte ?{' '}
                  <Link href="/inscription" className="text-primary font-semibold hover:underline">
                    S'inscrire gratuitement
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
