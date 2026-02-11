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
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    return strength;
  };

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-24 pb-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-lg mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-dark mb-2">Créer un compte</h1>
              <p className="text-gray-600">Rejoignez Win Academy aujourd'hui</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <form onSubmit={handleSubmit} className="space-y-5">
                {error && (
                  <div className="bg-red-50 text-red-600 p-4 rounded-lg text-sm">
                    {error}
                  </div>
                )}

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Prénom
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary"
                        placeholder="John"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Nom
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary"
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary"
                      placeholder="votre@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Téléphone
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary"
                      placeholder="+229 XX XX XX XX"
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
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
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
                  {/* Password strength indicator */}
                  {formData.password && (
                    <div className="mt-2">
                      <div className="flex gap-1">
                        {[1, 2, 3, 4].map((level) => (
                          <div
                            key={level}
                            className={`h-1 flex-1 rounded ${
                              passwordStrength() >= level
                                ? level <= 2
                                  ? 'bg-red-500'
                                  : level === 3
                                  ? 'bg-yellow-500'
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
                  <label className="block text-gray-700 font-medium mb-2">
                    Confirmer le mot de passe
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary"
                      placeholder="••••••••"
                      required
                    />
                  </div>
                  {formData.confirmPassword && (
                    <p className={`text-sm mt-1 ${formData.password === formData.confirmPassword ? 'text-green-600' : 'text-red-600'}`}>
                      {formData.password === formData.confirmPassword ? 'Les mots de passe correspondent' : 'Les mots de passe ne correspondent pas'}
                    </p>
                  )}
                </div>

                <div>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={acceptedTerms}
                      onChange={(e) => setAcceptedTerms(e.target.checked)}
                      className="w-5 h-5 mt-0.5 rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <span className="text-gray-600 text-sm">
                      J'accepte les{' '}
                      <Link href="/conditions-utilisation" className="text-primary hover:underline">
                        conditions d'utilisation
                      </Link>{' '}
                      et la{' '}
                      <Link href="/politique-confidentialite" className="text-primary hover:underline">
                        politique de confidentialité
                      </Link>
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {isLoading ? 'Inscription...' : (
                    <>
                      <Check size={20} />
                      Créer mon compte
                    </>
                  )}
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-gray-600">
                  Déjà un compte ?{' '}
                  <Link href="/connexion" className="text-primary font-medium hover:underline">
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
