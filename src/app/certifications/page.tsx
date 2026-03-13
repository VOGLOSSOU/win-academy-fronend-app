'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Award, CheckCircle, Users, Copy, ExternalLink, Loader2, Lock } from 'lucide-react';
import { certificatesApi, type Certificate } from '@/lib/api';
import { useAuthStore } from '@/store/authStore';

export default function CertificationsPage() {
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [loading, setLoading] = useState(true);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const { isAuthenticated } = useAuthStore();

  useEffect(() => {
    if (!isAuthenticated) {
      setLoading(false);
      return;
    }
    certificatesApi.getMine()
      .then(setCertificates)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [isAuthenticated]);

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const levelLabel = (level: string) => {
    if (level === 'DEBUTANT') return 'Débutant';
    if (level === 'INTERMEDIAIRE') return 'Intermédiaire';
    if (level === 'AVANCE') return 'Avancé';
    return level;
  };

  return (
    <>
      <Navigation />

      {/* Hero */}
      <section className="pt-56 pb-16 bg-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-dark mb-6">Mes Certificats</h1>
            <p className="text-2xl text-gray-600">
              Vos certifications obtenues après avoir validé vos formations sur WIN Academy.
            </p>
          </div>
        </div>
      </section>

      {/* Certificates section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          {loading ? (
            <div className="flex justify-center items-center py-24">
              <Loader2 className="w-10 h-10 text-primary animate-spin" />
            </div>
          ) : !isAuthenticated ? (
            <div className="text-center py-20">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lock className="w-10 h-10 text-gray-400" />
              </div>
              <h2 className="text-2xl font-bold text-dark mb-3">Connectez-vous pour voir vos certificats</h2>
              <p className="text-gray-500 mb-8">Vous devez être connecté pour accéder à vos certificats obtenus.</p>
              <Link href="/connexion" className="px-8 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-colors">
                Se connecter
              </Link>
            </div>
          ) : certificates.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-20 h-20 bg-yellow-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-yellow-400" />
              </div>
              <h2 className="text-2xl font-bold text-dark mb-3">Aucun certificat pour le moment</h2>
              <p className="text-gray-500 mb-8">Complétez une formation et réussissez l'évaluation pour obtenir votre premier certificat.</p>
              <Link href="/formations" className="px-8 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-colors">
                Voir les formations
              </Link>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {certificates.map((cert) => (
                <div key={cert.id} className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl shadow-lg overflow-hidden text-white">
                  {/* Card header */}
                  <div className="p-6 border-b border-white/20">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-blue-200 text-sm font-medium uppercase tracking-wide">WIN Academy</span>
                      <div className="bg-white/20 p-2 rounded-full">
                        <Award className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-1">{cert.formation?.title}</h3>
                    <span className="inline-block bg-white/20 text-white text-sm px-3 py-1 rounded-full">
                      Niveau {levelLabel(cert.formation?.level || '')}
                    </span>
                  </div>

                  {/* Card body */}
                  <div className="p-6 space-y-4">
                    <div>
                      <p className="text-blue-200 text-xs uppercase tracking-wide mb-1">Obtenu le</p>
                      <p className="font-semibold">{new Date(cert.issuedAt).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                    </div>

                    <div>
                      <p className="text-blue-200 text-xs uppercase tracking-wide mb-1">Code de vérification</p>
                      <div className="flex items-center gap-2">
                        <code className="flex-1 bg-white/10 px-3 py-2 rounded-lg text-sm font-mono truncate">{cert.uniqueCode}</code>
                        <button
                          onClick={() => copyCode(cert.uniqueCode)}
                          className="p-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
                          title="Copier le code"
                        >
                          <Copy className="w-4 h-4" />
                        </button>
                      </div>
                      {copiedCode === cert.uniqueCode && (
                        <p className="text-green-300 text-xs mt-1">Code copié !</p>
                      )}
                    </div>

                    <Link
                      href={`/certificats/verifier?code=${cert.uniqueCode}`}
                      className="flex items-center justify-center gap-2 w-full py-3 bg-white text-blue-700 rounded-xl font-semibold hover:bg-blue-50 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Voir le certificat
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Why Certify */}
      <section className="py-16 bg-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Pourquoi obtenir une certification ?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="text-blue-600" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">Reconnaissance</h3>
                <p className="text-gray-600">Nos certifications sont reconnues par les employeurs au Bénin.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="text-green-600" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">Compétences validées</h3>
                <p className="text-gray-600">Démontrez vos compétences aux employeurs potentiels.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-purple-600" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">Carrière accélérée</h3>
                <p className="text-gray-600">Augmentez vos chances d'embauche et d'évolution.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
