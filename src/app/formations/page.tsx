'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { formationsApi, categoriesApi, type Formation, type Category } from '@/lib/api';
import {
  Search,
  Clock,
  Users,
  Award,
  BookOpen,
  Loader2,
} from 'lucide-react';

export default function FormationsPage() {
  const [formations, setFormations] = useState<Formation[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Charger les catégories et formations au démarrage
  useEffect(() => {
    async function loadData() {
      try {
        setIsLoading(true);
        setError(null);
        
        // Charger les catégories
        const categoriesData = await categoriesApi.getAll(1, 20);
        setCategories(categoriesData.data);
        
        // Charger toutes les formations
        const formationsData = await formationsApi.getAll(1, 50);
        setFormations(formationsData.data);
      } catch (err) {
        console.error('Erreur lors du chargement des données:', err);
        setError('Impossible de charger les formations. Veuillez réessayer plus tard.');
      } finally {
        setIsLoading(false);
      }
    }
    
    loadData();
  }, []);

  // Filtrer les formations
  const filteredFormations = formations.filter((formation) => {
    const matchesCategory = activeCategory === 'all' || 
      formation.category?.name?.toLowerCase() === activeCategory.toLowerCase();
    const matchesSearch =
      searchQuery === '' ||
      formation.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (formation.shortDescription?.toLowerCase().includes(searchQuery.toLowerCase()) ||
       formation.fullDescription?.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Préparer les catégories pour l'affichage
  const displayCategories = [
    { id: 'all', name: 'Toutes les formations' },
    ...categories.map(cat => ({ id: cat.name.toLowerCase(), name: cat.name }))
  ];

  return (
    <>
      <Navigation />

      {/* Hero */}
      <section className="pt-56 pb-24 relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop")',
            filter: 'brightness(0.4)'
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Nos Formations
            </h1>
            <p className="text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
              Apprenez. Transformez-vous. Obtenez des résultats concrets.
            </p>

            {/* Search */}
            <div className="relative max-w-xl mx-auto">
              <Search
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Rechercher une formation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 text-black placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {displayCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2 rounded-full font-medium transition-all ${
                  activeCategory === cat.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Formations Grid */}
      <section className="py-16 bg-light">
        <div className="container mx-auto px-4">
          {isLoading ? (
            <div className="flex justify-center items-center py-24">
              <Loader2 className="w-12 h-12 text-blue-600 animate-spin" />
              <span className="ml-3 text-gray-600">Chargement des formations...</span>
            </div>
          ) : error ? (
            <div className="text-center py-24">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center">
                  <BookOpen className="w-10 h-10 text-red-300" />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-red-500 mb-3">
                Erreur de chargement
              </h2>
              <p className="text-gray-400 max-w-md mx-auto">
                {error}
              </p>
            </div>
          ) : filteredFormations.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredFormations.map((formation) => (
                <div
                  key={formation.id}
                  className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden group"
                >
                  <div className="h-48 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all" />
                    {formation.level && (
                      <span className="absolute top-4 right-4 bg-white/90 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                        {formation.level}
                      </span>
                    )}
                    {formation.price === 0 && (
                      <span className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Gratuit
                      </span>
                    )}
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-dark mb-3 group-hover:text-blue-600 transition-colors">
                      {formation.title}
                    </h3>
                    <p className="text-gray-600 text-lg mb-5 line-clamp-3">
                      {formation.shortDescription || formation.fullDescription}
                    </p>

                    <div className="flex items-center justify-between text-lg text-gray-500 mb-5 pt-4 border-t">
                      <div className="flex items-center gap-2">
                        <Clock size={20} />
                        <span>{formation.duration} min</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users size={20} />
                        <span>{formation._count?.enrollments || 0}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award size={20} />
                        <span>{formation.level}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        {formation.price === 0 ? (
                          <span className="text-2xl font-bold text-green-600">Gratuit</span>
                        ) : (
                          <span className="text-2xl font-bold text-blue-600">
                            {formation.price?.toLocaleString()} XOF
                          </span>
                        )}
                      </div>
                      <Link
                        href={`/formations/${formation.id}`}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Voir plus
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-24">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center">
                  <BookOpen className="w-10 h-10 text-blue-300" />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-gray-400 mb-3">
                Aucune formation trouvée
              </h2>
              <p className="text-gray-400 max-w-md mx-auto">
                Essayez avec d'autres critères de recherche.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <p className="text-4xl font-bold mb-2">5,000+</p>
              <p className="text-blue-100">Apprenants</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">{formations.length}</p>
              <p className="text-blue-100">Formations</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">10</p>
              <p className="text-blue-100">Certifications</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">95%</p>
              <p className="text-blue-100">Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
