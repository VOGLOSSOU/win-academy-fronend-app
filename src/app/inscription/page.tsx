'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { User, Mail, Phone, Lock, Eye, EyeOff, Check } from 'lucide-react';
import { useAuthStore } from '@/store/authStore';

export default function InscriptionPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  
  const router = useRouter();
  const { register, isLoading } = useAuthStore();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Les mots de passe ne correspondent pas');
      return;
    }

    if (!acceptedTerms) {
      setError('Vous devez accepter les conditions d\'utilisation');
      return;
    }

    try {
      await register({ ...formData, id: '' });
      router.push('/');
    } catch (err) {
      setError('Une erreur est survenue lors de l\'inscription');
    }
  };

  const passwordStrength = () => {
    const password = formData.password;
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password) && /[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    return strength;
  };

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-40 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl p-12">
              <div className="text-center mb-12">
                <h1 className="text-5xl font-bold text-dark mb-4">Créer un compte</h1>
                <p className="text-gray-600 text-2xl">Rejoignez Win Academy aujourd'hui</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                {error && (
                  <div className="bg-red-50 text-red-600 p-6 rounded-xl text-xl">
                    {error}
                  </div>
                )}

                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-4 text-xl">
                      Prénom
                    </label>
                    <div className="relative">
                      <User className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" size={28} />
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full pl-16 pr-6 py-5 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-primary bg-gray-50 focus:bg-white transition-colors text-xl"
                        placeholder="John"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-4 text-xl">
                      Nom
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-6 py-5 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-primary bg-gray-50 focus:bg-white transition-colors text-xl"
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-4 text-xl">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" size={28} />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-16 pr-6 py-5 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-primary bg-gray-50 focus:bg-white transition-colors text-xl"
                      placeholder="votre@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-4 text-xl">
                    Téléphone
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" size={28} />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-16 pr-6 py-5 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-primary bg-gray-50 focus:bg-white transition-colors text-xl"
                      placeholder="+229 XX XX XX XX"
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
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
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
                  {formData.password && (
                    <div className="mt-4">
                      <div className="flex gap-2">
                        {[1, 2, 3, 4].map((level) => (
                          <div
                            key={level}
                            className={`h-3 flex-1 rounded-full transition-colors ${
                              passwordStrength() >= level
                                ? level <= 1
                                  ? 'bg-red-500'
                                  : level === 2
                                  ? 'bg-yellow-500'
                                  : level === 3
                                  ? 'bg-blue-500'
                                  : 'bg-green-500'
                                : 'bg-gray-200'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-4 text-xl">
                    Confirmer le mot de passe
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" size={28} />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className="w-full pl-16 pr-6 py-5 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-primary bg-gray-50 focus:bg-white transition-colors text-xl"
                      placeholder="••••••••"
                      required
                    />
                  </div>
                  {formData.confirmPassword && (
                    <p className={`text-lg mt-3 ${formData.password === formData.confirmPassword ? 'text-green-600' : 'text-red-600'}`}>
                      {formData.password === formData.confirmPassword ? '✓ Les mots de passe correspondent' : '✗ Les mots de passe ne correspondent pas'}
                    </p>
                  )}
                </div>

                <div className="pt-4">
                  <label className="flex items-start gap-4 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={acceptedTerms}
                      onChange={(e) => setAcceptedTerms(e.target.checked)}
                      className="w-6 h-6 mt-1 rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <span className="text-gray-600 text-xl">
                      J'accepte les{' '}
                      <Link href="/conditions-utilisation" className="text-primary hover:underline font-semibold">
                        conditions d'utilisation
                      </Link>{' '}
                      et la{' '}
                      <Link href="/politique-confidentialite" className="text-primary hover:underline font-semibold">
                        politique de confidentialité
                      </Link>
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-6 bg-primary text-white rounded-2xl font-bold text-2xl hover:bg-primary/90 transition-colors disabled:opacity-50 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-shadow mt-6"
                >
                  {isLoading ? 'Inscription...' : (
                    <>
                      <Check size={28} />
                      Créer mon compte
                    </>
                  )}
                </button>
              </form>

              <div className="mt-10 pt-8 border-t-2 border-gray-100 text-center">
                <p className="text-gray-600 text-xl">
                  Déjà un compte ?{' '}
                  <Link href="/connexion" className="text-primary font-bold text-2xl hover:underline">
                    Se connecter
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
