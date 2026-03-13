'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { FileText, Download, BookOpen, ExternalLink, GraduationCap, Laptop, Mail } from 'lucide-react';

// Fonction pour obtenir l'icône selon la catégorie
const getCategoryIcon = (categorie: string) => {
  switch (categorie.toLowerCase()) {
    case 'anglais':
      return GraduationCap;
    case 'informatique':
      return Laptop;
    case 'communication':
      return Mail;
    default:
      return BookOpen;
  }
};

const ressources = [
  {
    id: 1,
    titre: 'Formation Anglais Wurami Premium',
    description:
      'Maîtrisez l\'anglais professionnel avec ce parcours complet conçu par Wurami. Idéal pour les débutants qui souhaitent acquirez des compétences solides en anglais des affaires.',
    auteur: 'WURAMI INNOVATIVE HUB',
    format: 'PDF',
    pdfUrl: '/Formation_Anglais_Wurami_Premium.pdf',
    categorie: 'Anglais',
  },
  {
    id: 2,
    titre: 'Premiers pas sur ordinateur',
    description:
      'Support d\'animation pédagogique pour les formateurs. Apprenez les bases de l\'informatique : souris, navigation internet, création de documents.',
    auteur: 'WURAMI INNOVATIVE HUB',
    format: 'PDF',
    pdfUrl: '/Premiers pas sur ordinateur (support d\'animation).pdf',
    categorie: 'Informatique',
  },
  {
    id: 3,
    titre: 'Je communique par mail',
    description:
      'Guide pratique pour maîtriser la communication professionnelle par email : structurer ses messages, adopter le bon ton et éviter les erreurs courantes.',
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

      {/* Hero */}
      <section className="pt-40 pb-20 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center px-4">
          <div className="flex justify-center mb-8">
            <div className="bg-blue-50 p-6 rounded-full border-2 border-blue-100">
              <BookOpen className="w-16 h-16 text-blue-600" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-gray-900 leading-tight">
            Ressources Gratuites
          </h1>
          <p className="text-gray-600 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed">
            Des guides et supports pédagogiques{' '}
            <span className="text-blue-600 font-bold">100% gratuits</span>{' '}
            pour développer vos compétences.
          </p>
        </div>
      </section>

      {/* Contenu - Cartes carrées alignées */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-16">
        <div className="text-center mb-12">
          <p className="text-gray-500 text-2xl font-medium">
            {ressources.length} ressources disponibles
          </p>
        </div>

        {/* Grille de cartes carrées - même hauteur */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ressources.map((ressource) => {
            const CategoryIcon = getCategoryIcon(ressource.categorie);
            
            return (
              <div
                key={ressource.id}
                className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 p-6 flex flex-col h-full"
              >
                {/* Icône en haut */}
                <div className="text-center mb-4">
                  <div className="w-20 h-20 mx-auto bg-blue-600 rounded-xl flex items-center justify-center mb-3">
                    <CategoryIcon className="w-10 h-10 text-white" />
                  </div>
                  <div className="flex justify-center gap-2">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-base font-bold">
                      {ressource.categorie}
                    </span>
                  </div>
                </div>

                {/* Titre */}
                <h2 className="text-2xl font-bold text-dark mb-3 text-center">
                  {ressource.titre}
                </h2>

                {/* Description */}
                <p className="text-gray-600 text-lg mb-4 leading-relaxed text-center flex-1">
                  {ressource.description}
                </p>

                {/* Auteur */}
                <p className="text-center text-gray-500 text-base mb-4">
                  Par <span className="font-bold text-gray-700">{ressource.auteur}</span>
                </p>

                {/* Boutons */}
                <div className="flex gap-3 mt-auto">
                  <a
                    href={ressource.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors text-lg"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Lire
                  </a>
                  <a
                    href={ressource.pdfUrl}
                    download
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border-2 border-blue-600 text-blue-600 rounded-xl font-bold hover:bg-blue-50 transition-colors text-lg"
                  >
                    <Download className="w-5 h-5" />
                    Télécharger
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Placeholder */}
        <div className="mt-16 text-center py-12 border-3 border-dashed border-gray-300 rounded-2xl">
          <BookOpen className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500 text-xl font-bold">D'autres ressources arrivent bientôt</p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
