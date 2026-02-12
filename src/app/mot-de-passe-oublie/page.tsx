'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Mail, ArrowLeft, CheckCircle, Loader2 } from 'lucide-react';

export default function MotDePasseOubliePage() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email) {
      setError('Veuillez entrer votre adresse email');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Veuillez entrer une adresse email valide');
      return;
    }

    setIsLoading(true);

    // Simulation d'envoi
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsLoading(false);
    setIsSubmitted(true);
  };

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-light">
        {/* Hero minimal */}
        <section className="pt-56 pb-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Back link */}
              <Link
                href="/connexion"
                className="inline-flex items-center gap-2 text-gray-600 hover:text-primary mb-8 transition-colors"
              >
                <ArrowLeft size={20} />
                <span>Retour à la connexion</span>
              </Link>

              {/* Form Card */}
              <div className="bg-white rounded-2xl shadow-md p-12">
                {!isSubmitted ? (
                  <>
                    <div className="text-center mb-8">
                      <div className="w-16 h-16 mx-auto rounded-full bg-primary-light flex items-center justify-center mb-6">
                        <Mail className="text-primary" size={32} />
                      </div>
                      <h1 className="text-5xl font-bold text-dark mb-4">
                        Mot de passe oublié ?
                      </h1>
                      <p className="text-xl text-gray-600">
                        Pas de souci ! Entrez votre adresse email et nous vous enverrons un lien pour réinitialiser votre mot de passe.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label htmlFor="email" className="block text-2xl font-medium text-dark mb-3">
                          Adresse email
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="votre@email.com"
                          className="w-full px-6 py-4 text-xl border border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                        />
                        {error && (
                          <p className="mt-2 text-red-500 text-lg">{error}</p>
                        )}
                      </div>

                      <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full py-4 px-8 bg-primary text-white text-xl font-medium rounded-xl hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      >
                        {isLoading ? (
                          <>
                            <Loader2 className="animate-spin" size={24} />
                            <span>Envoi en cours...</span>
                          </>
                        ) : (
                          'Envoyer le lien de réinitialisation'
                        )}
                      </button>
                    </form>

                    <div className="mt-8 text-center">
                      <p className="text-gray-600 text-lg">
                        Vous n'avez pas de compte ?{' '}
                        <Link href="/inscription" className="text-primary font-medium hover:underline">
                          Créer un compte
                        </Link>
                      </p>
                    </div>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <div className="w-20 h-20 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-6">
                      <CheckCircle className="text-green-500" size={40} />
                    </div>
                    <h2 className="text-4xl font-bold text-dark mb-4">
                      Email envoyé !
                    </h2>
                    <p className="text-xl text-gray-600 mb-8 max-w-lg mx-auto">
                      Nous avons envoyé un lien de réinitialisation à <strong>{email}</strong>. 
                      Vérifiez votre boîte de réception et suivez les instructions.
                    </p>
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8 max-w-lg mx-auto">
                      <p className="text-blue-800 text-lg">
                        💡 Conseil : Vérifiez également vos courriers indésirables si vous ne trouvez pas l'email.
                      </p>
                    </div>
                    <Link
                      href="/connexion"
                      className="inline-flex items-center gap-2 text-primary font-medium hover:underline text-xl"
                    >
                      <ArrowLeft size={20} />
                      Retour à la connexion
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
