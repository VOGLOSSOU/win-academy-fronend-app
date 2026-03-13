'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { FileText, Download, BookOpen, ExternalLink } from 'lucide-react';

const ressources = [
  {
    id: 1,
    titre: 'Je communique par mail',
    description:
      'Un guide pratique complet pour maîtriser la communication professionnelle par email : structurer ses messages, adopter le bon ton, éviter les erreurs courantes et gagner en efficacité au quotidien.',
    auteur: 'EMMAUS CONNECT',
    format: 'PDF',
    pdfUrl: '/Je-communique-par-mail.pdf',
    categorie: 'Communication',
  },
];

export default function RessourcesGratuitesPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navigation />

      {/* Hero — fond avec image */}
      <section className="pt-48 pb-24 relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1973&auto=format&fit=crop")',
            filter: 'brightness(0.5)'
          }}
        />
        <div className="max-w-4xl mx-auto text-center relative z-10 text-white px-4">
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 backdrop-blur-md p-5 rounded-full border border-white/30">
              <BookOpen className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-5 drop-shadow-lg">
            Ressources Gratuites
          </h1>
          <p className="text-white/90 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            Des guides et supports pédagogiques <span className="text-blue-300 font-semibold">100 % gratuits</span> pour développer vos compétences à votre rythme.
          </p>
        </div>
      </section>

      {/* Contenu */}
      <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-14">
        <p className="text-gray-400 text-base mb-8 font-medium">
          {ressources.length} ressource{ressources.length > 1 ? 's' : ''} disponible{ressources.length > 1 ? 's' : ''}
        </p>

        <div className="grid gap-6">
          {ressources.map((ressource) => (
            <div
              key={ressource.id}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col md:flex-row md:items-center gap-8"
            >
              {/* Icône */}
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <FileText className="w-10 h-10 text-primary" />
                </div>
              </div>

              {/* Infos */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {ressource.categorie}
                  </span>
                  <span className="text-sm font-semibold text-green-700 bg-green-50 px-3 py-1 rounded-full">
                    Gratuit
                  </span>
                  <span className="text-sm text-gray-400 uppercase tracking-wide font-medium">
                    {ressource.format}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-dark mb-3">
                  {ressource.titre}
                </h2>
                <p className="text-gray-500 text-base mb-3 leading-relaxed">
                  {ressource.description}
                </p>
                <p className="text-sm text-gray-400">
                  Par <span className="font-semibold text-gray-600">{ressource.auteur}</span>
                </p>
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-3 flex-shrink-0">
                <a
                  href={ressource.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-colors text-base"
                >
                  <ExternalLink className="w-5 h-5" />
                  Lire
                </a>
                <a
                  href={ressource.pdfUrl}
                  download
                  className="flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary rounded-xl font-semibold hover:bg-primary/5 transition-colors text-base"
                >
                  <Download className="w-5 h-5" />
                  Télécharger
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Placeholder futures ressources */}
        <div className="mt-14 text-center py-14 border-2 border-dashed border-gray-200 rounded-2xl">
          <BookOpen className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500 text-lg font-semibold">D'autres ressources arrivent bientôt</p>
          <p className="text-gray-400 text-base mt-2">
            Revenez régulièrement pour découvrir de nouveaux contenus gratuits.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
