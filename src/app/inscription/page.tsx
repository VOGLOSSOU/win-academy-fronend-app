'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { User, Mail, Lock, Eye, EyeOff, Check, Calendar, MapPin } from 'lucide-react';
import { useAuthStore } from '@/store/authStore';
import { geoApi } from '@/lib/api';
import type { Department } from '@/lib/api';

export default function InscriptionPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    dateOfBirth: '',
    sex: '' as 'M' | 'F' | '',
    departmentId: '',
    communeId: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [departments, setDepartments] = useState<Department[]>([]);
  const [loadingGeo, setLoadingGeo] = useState(true);

  const router = useRouter();
  const { register, isLoading } = useAuthStore();

  useEffect(() => {
    geoApi.getDepartments()
      .then((res) => setDepartments(res.data))
      .catch(() => setError('Impossible de charger les communes. Réessayez.'))
      .finally(() => setLoadingGeo(false));
  }, []);

  const selectedDepartment = departments.find((d) => d.id === formData.departmentId);
  const communes = selectedDepartment?.communes ?? [];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    if (name === 'departmentId') {
      setFormData((prev) => ({ ...prev, departmentId: value, communeId: '' }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Les mots de passe ne correspondent pas');
      return;
    }
    if (!formData.sex) {
      setError('Veuillez sélectionner votre sexe');
      return;
    }
    if (!formData.communeId) {
      setError('Veuillez sélectionner votre commune');
      return;
    }
    if (!acceptedTerms) {
      setError("Vous devez accepter les conditions d'utilisation");
      return;
    }

    const result = await register({
      firstName: formData.firstName,
      lastName: formData.lastName,
      dateOfBirth: formData.dateOfBirth,
      sex: formData.sex as 'M' | 'F',
      communeId: formData.communeId,
      email: formData.email,
      password: formData.password,
    });

    if (result.success) {
      router.push('/');
    } else {
      setError(result.error || "Une erreur est survenue lors de l'inscription");
    }
  };

  const passwordStrength = () => {
    const p = formData.password;
    let s = 0;
    if (p.length >= 8) s++;
    if (/[A-Z]/.test(p) && /[a-z]/.test(p)) s++;
    if (/[0-9]/.test(p)) s++;
    if (/[^A-Za-z0-9]/.test(p)) s++;
    return s;
  };

  const inputClass =
    'w-full px-6 py-5 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-primary bg-gray-50 focus:bg-white transition-colors text-xl';
  const inputWithIconClass =
    'w-full pl-16 pr-6 py-5 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-primary bg-gray-50 focus:bg-white transition-colors text-xl';
  const labelClass = 'block text-gray-700 font-semibold mb-4 text-xl';

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-40 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl p-12">
              <div className="text-center mb-12">
                <h1 className="text-5xl font-bold text-dark mb-4">Créer un compte</h1>
                <p className="text-gray-600 text-2xl">
                  Rejoignez Wurami Innovative Hub aujourd'hui
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                {error && (
                  <div className="bg-red-50 text-red-600 p-6 rounded-xl text-xl">
                    {error}
                  </div>
                )}

                {/* Prénom / Nom */}
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <label className={labelClass}>Prénom</label>
                    <div className="relative">
                      <User
                        className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400"
                        size={28}
                      />
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className={inputWithIconClass}
                        placeholder="John"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className={labelClass}>Nom</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className={labelClass}>Email</label>
                  <div className="relative">
                    <Mail
                      className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400"
                      size={28}
                    />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={inputWithIconClass}
                      placeholder="votre@email.com"
                      required
                    />
                  </div>
                </div>

                {/* Date de naissance / Sexe */}
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <label className={labelClass}>Date de naissance</label>
                    <div className="relative">
                      <Calendar
                        className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400"
                        size={28}
                      />
                      <input
                        type="date"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleChange}
                        className={inputWithIconClass}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className={labelClass}>Sexe</label>
                    <select
                      name="sex"
                      value={formData.sex}
                      onChange={handleChange}
                      className={inputClass}
                      required
                    >
                      <option value="">Sélectionner...</option>
                      <option value="M">Masculin</option>
                      <option value="F">Féminin</option>
                    </select>
                  </div>
                </div>

                {/* Département / Commune */}
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <label className={labelClass}>Département</label>
                    <div className="relative">
                      <MapPin
                        className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400"
                        size={28}
                      />
                      <select
                        name="departmentId"
                        value={formData.departmentId}
                        onChange={handleChange}
                        className="w-full pl-16 pr-6 py-5 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-primary bg-gray-50 focus:bg-white transition-colors text-xl"
                        disabled={loadingGeo}
                        required
                      >
                        <option value="">
                          {loadingGeo ? 'Chargement...' : 'Sélectionner...'}
                        </option>
                        {departments.map((dept) => (
                          <option key={dept.id} value={dept.id}>
                            {dept.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className={labelClass}>Commune</label>
                    <select
                      name="communeId"
                      value={formData.communeId}
                      onChange={handleChange}
                      className={inputClass}
                      disabled={!formData.departmentId}
                      required
                    >
                      <option value="">
                        {!formData.departmentId
                          ? "Choisir un département d'abord"
                          : 'Sélectionner...'}
                      </option>
                      {communes.map((c) => (
                        <option key={c.id} value={c.id}>
                          {c.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Mot de passe */}
                <div>
                  <label className={labelClass}>Mot de passe</label>
                  <div className="relative">
                    <Lock
                      className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400"
                      size={28}
                    />
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
                    <div className="flex gap-2 mt-4">
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
                  )}
                </div>

                {/* Confirmer mot de passe */}
                <div>
                  <label className={labelClass}>Confirmer le mot de passe</label>
                  <div className="relative">
                    <Lock
                      className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400"
                      size={28}
                    />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className={inputWithIconClass}
                      placeholder="••••••••"
                      required
                    />
                  </div>
                  {formData.confirmPassword && (
                    <p
                      className={`text-lg mt-3 ${
                        formData.password === formData.confirmPassword
                          ? 'text-green-600'
                          : 'text-red-600'
                      }`}
                    >
                      {formData.password === formData.confirmPassword
                        ? '✓ Les mots de passe correspondent'
                        : '✗ Les mots de passe ne correspondent pas'}
                    </p>
                  )}
                </div>

                {/* CGU */}
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
                      <Link
                        href="/conditions-utilisation"
                        className="text-primary hover:underline font-semibold"
                      >
                        conditions d'utilisation
                      </Link>{' '}
                      et la{' '}
                      <Link
                        href="/politique-confidentialite"
                        className="text-primary hover:underline font-semibold"
                      >
                        politique de confidentialité
                      </Link>
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-6 bg-primary text-white rounded-2xl font-bold text-2xl hover:bg-primary/90 transition-colors disabled:opacity-50 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl mt-6"
                >
                  {isLoading ? (
                    'Inscription...'
                  ) : (
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
                  <Link
                    href="/connexion"
                    className="text-primary font-bold text-2xl hover:underline"
                  >
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
