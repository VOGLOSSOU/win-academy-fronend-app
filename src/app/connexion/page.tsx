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
      <main className="min-h-screen pt-40 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl p-12">
              <div className="text-center mb-12">
                <h1 className="text-5xl font-bold text-dark mb-4">Bienvenue</h1>
                <p className="text-gray-600 text-2xl">Connectez-vous à votre compte</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                {error && (
                  <div className="bg-red-50 text-red-600 p-6 rounded-xl text-xl">
                    {error}
                  </div>
                )}

                <div>
                  <label className="block text-gray-700 font-semibold mb-4 text-xl">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" size={28} />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-16 pr-6 py-5 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-primary bg-gray-50 focus:bg-white transition-colors text-xl"
                      placeholder="votre@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-4 text-xl">
                    Mot de passe
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" size={28} />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-16 pr-16 py-5 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-primary bg-gray-50 focus:bg-white transition-colors text-xl"
                      placeholder="••••••••"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff size={28} /> : <Eye size={28} />}
                    </button>
                  </div>
                </div>

                <div className="flex justify-between items-center py-3">
                  <label className="flex items-center gap-4 cursor-pointer">
                    <input 
                      type="checkbox" 
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="w-6 h-6 rounded border-gray-300 text-primary focus:ring-primary" 
                    />
                    <span className="text-gray-600 text-xl">Se souvenir de moi</span>
                  </label>
                  <Link href="/mot-de-passe-oublie" className="text-primary text-xl hover:underline font-bold">
                    Mot de passe oublié ?
                  </Link>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-6 bg-primary text-white rounded-2xl font-bold text-2xl hover:bg-primary/90 transition-colors disabled:opacity-50 shadow-lg hover:shadow-xl transition-shadow mt-6"
                >
                  {isLoading ? 'Connexion...' : 'Se connecter'}
                </button>
              </form>

              <div className="mt-10 pt-8 border-t-2 border-gray-100 text-center">
                <p className="text-gray-600 text-xl">
                  Pas encore de compte ?{' '}
                  <Link href="/inscription" className="text-primary font-bold text-2xl hover:underline">
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
