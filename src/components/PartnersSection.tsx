'use client';

import Link from 'next/link';
import { Building2, GraduationCap, Briefcase, Heart, Plus } from 'lucide-react';

const partnersData = {
  academiques: {
    title: 'Partenaires Académiques',
    description: 'Écoles publiques et privées, centres de formation',
    partners: [
      { name: 'CEG Vekky', type: 'École publique' },
      { name: 'CEG 1 Ganvié', type: 'École publique' },
      { name: 'Sainte Claire', type: 'École privée' },
      { name: 'Échos des Monts', type: 'École privée' },
      { name: 'Centre IFRI', type: 'Centre de formation' },
    ],
    count: '12 écoles partenaires'
  },
  institutionnels: {
    title: 'Partenaires Institutionnels',
    description: 'Mairies, directions départementales, structures publiques',
    partners: [
      { name: 'Mairie de Cotonou', type: 'Municipalité' },
      { name: 'Mairie d\'Abomey-Calavi', type: 'Municipalité' },
      { name: 'Direction Départ. Enseignement', type: 'Structure publique' },
      { name: 'ANPE', type: 'Agence nationale' },
      { name: 'Digital Benin', type: 'Structure publique' },
    ],
    count: '8 structures partenaires'
  },
  entreprises: {
    title: 'Partenaires Entreprises & Techniques',
    description: 'Entreprises locales, experts, consultants',
    partners: [
      { name: 'Orabank', type: 'Banque' },
      { name: 'Ecobank', type: 'Banque' },
      { name: 'NSIA Assurances', type: 'Assurance' },
      { name: 'Globacom', type: 'Télécom' },
      { name: 'Tech Solutions', type: 'Entreprise tech' },
    ],
    count: '15 entreprises partenaires'
  },
  sociaux: {
    title: 'Partenaires Sociaux & ONG',
    description: 'Associations locales, ONG d\'inclusion',
    partners: [
      { name: 'ONG JVE Benin', type: 'ONG Environnement' },
      { name: 'Association Soleil Levant', type: 'Association' },
      { name: 'ONG ALAFIA', type: 'ONG Inclusion' },
      { name: 'Jeunes Leaders Africa', type: 'Organisation' },
      { name: 'HandiCap International', type: 'ONG' },
    ],
    count: '10 organisations partenaires'
  },
};

export default function PartnersSection() {
  return (
    <section className="py-16 bg-light" id="partenaires">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Découvrez les témoignages de ceux qui ont changé leur vie avec Wurami E-Learning
          </h2>
          <p className="text-2xl text-gray-600 max-w-2xl mx-auto">
            Wurami E-Learning collabore avec des institutions éducatives, des entreprises et des organisations engagées pour l'employabilité et l'inclusion numérique des jeunes
          </p>
        </div>

        {/* Partner Categories */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Academiques */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                <GraduationCap className="text-blue-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-dark">{partnersData.academiques.title}</h3>
                <p className="text-sm text-gray-500">{partnersData.academiques.count}</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">{partnersData.academiques.description}</p>
            <div className="flex flex-wrap gap-2">
              {partnersData.academiques.partners.map((partner, index) => (
                <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                  {partner.name}
                </span>
              ))}
            </div>
          </div>

          {/* Institutionnels */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                <Building2 className="text-purple-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-dark">{partnersData.institutionnels.title}</h3>
                <p className="text-sm text-gray-500">{partnersData.institutionnels.count}</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">{partnersData.institutionnels.description}</p>
            <div className="flex flex-wrap gap-2">
              {partnersData.institutionnels.partners.map((partner, index) => (
                <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                  {partner.name}
                </span>
              ))}
            </div>
          </div>

          {/* Entreprises */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                <Briefcase className="text-green-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-dark">{partnersData.entreprises.title}</h3>
                <p className="text-sm text-gray-500">{partnersData.entreprises.count}</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">{partnersData.entreprises.description}</p>
            <div className="flex flex-wrap gap-2">
              {partnersData.entreprises.partners.map((partner, index) => (
                <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                  {partner.name}
                </span>
              ))}
            </div>
          </div>

          {/* Sociaux */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                <Heart className="text-red-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-dark">{partnersData.sociaux.title}</h3>
                <p className="text-sm text-gray-500">{partnersData.sociaux.count}</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">{partnersData.sociaux.description}</p>
            <div className="flex flex-wrap gap-2">
              {partnersData.sociaux.partners.map((partner, index) => (
                <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                  {partner.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Partnership */}
        <div className="bg-gradient-to-r from-primary to-blue-600 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Vous souhaitez devenir partenaire ?
          </h3>
          <p className="text-white/90 mb-6 max-w-xl mx-auto">
                        Rejoignez Wurami E-Learning pour contribuer à l'autonomisation des jeunes et au développement numérique du Benin
          </p>
          <Link 
            href="/inscription" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-gray-100 transition-colors"
          >
            Devenir partenaire
            <Plus size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
