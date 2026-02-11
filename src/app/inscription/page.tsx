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
      <main className="min-h-screen pt-56 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl p-10">
              <div className="text-center mb-10">
                <h1 className="text-4xl font-bold text-dark mb-3">Créer un compte</h1>
                <p className="text-gray-600 text-lg">Rejoignez Win Academy aujourd'hui</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {error && (
                  <div className="bg-red-50 text-red-600 p-4 rounded-xl text-sm">
                    {error}
                  </div>
                )}

                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label className="block text-gray-700 font-medium mb-3 text-lg">
                      Prénom
                    </label>
                    <div className="relative">
                      <User className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={22} />
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full pl-14 pr-5 py-4 border border-gray-200 rounded-xl focus:outline-none focus:border-primary bg-gray-50 focus:bg-white transition-colors text-lg"
                        placeholder="John"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-3 text-lg">
                      Nom
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:outline-none focus:border-primary bg-gray-50 focus:bg-white transition-colors text-lg"
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-3 text-lg">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={22} />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-14 pr-5 py-4 border border-gray-200 rounded-xl focus:outline-none focus:border-primary bg-gray-50 focus:bg-white transition-colors text-lg"
                      placeholder="votre@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-3 text-lg">
                    Téléphone
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={22} />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-14 pr-5 py-4 border border-gray-200 rounded-xl focus:outline-none focus:border-primary bg-gray-50 focus:bg-white transition-colors text-lg"
                      placeholder="+229 XX XX XX XX"
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
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
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
                  {formData.password && (
                    <div className="mt-3">
                      <div className="flex gap-1">
                        {[1, 2, 3, 4].map((level) => (
                          <div
                            key={level}
                            className={`h-2 flex-1 rounded-full transition-colors ${
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
                  <label className="block text-gray-700 font-medium mb-3 text-lg">
                    Confirmer le mot de passe
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={22} />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className="w-full pl-14 pr-5 py-4 border border-gray-200 rounded-xl focus:outline-none focus:border-primary bg-gray-50 focus:bg-white transition-colors text-lg"
                      placeholder="••••••••"
                      required
                    />
                  </div>
                  {formData.confirmPassword && (
                    <p className={`text-sm mt-2 ${formData.password === formData.confirmPassword ? 'text-green-600' : 'text-red-600'}`}>
                      {formData.password === formData.confirmPassword ? '✓ Les mots de passe correspondent' : '✗ Les mots de passe ne correspondent pas'}
                    </p>
                  )}
                </div>

                <div className="pt-2">
                  <label className="flex items-start gap-4 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={acceptedTerms}
                      onChange={(e) => setAcceptedTerms(e.target.checked)}
                      className="w-5 h-5 mt-1 rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <span className="text-gray-600 text-base">
                      J'accepte les{' '}
                      <Link href="/conditions-utilisation" className="text-primary hover:underline font-medium">
                        conditions d'utilisation
                      </Link>{' '}
                      et la{' '}
                      <Link href="/politique-confidentialite" className="text-primary hover:underline font-medium">
                        politique de confidentialité
                      </Link>
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-4 bg-primary text-white rounded-xl font-semibold text-lg hover:bg-primary/90 transition-colors disabled:opacity-50 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-shadow mt-4"
                >
                  {isLoading ? 'Inscription...' : (
                    <>
                      <Check size={22} />
                      Créer mon compte
                    </>
                  )}
                </button>
              </form>

              <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                <p className="text-gray-600 text-lg">
                  Déjà un compte ?{' '}
                  <Link href="/connexion" className="text-primary font-semibold hover:underline">
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
