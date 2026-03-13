'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { 
  Play, Clock, Users, Award, CheckCircle, Star, ChevronDown, ChevronUp,
  FileText, Download, MessageCircle, Share2, Heart, ArrowLeft, Calendar,
  Languages, Laptop, Briefcase, Sparkles, GraduationCap, Target,
  Accessibility, PiggyBank, TrendingUp, Rocket, PenTool, Code, UserCheck, Mail, BookOpen
} from 'lucide-react';
import { formationsApi, enrollmentsApi, FormationDetail } from '@/lib/api';
import { useAuthStore } from '@/store/authStore';
import { toast } from 'react-hot-toast';

interface FormationDetailClientProps {
  formationId?: string;
}

export default function FormationDetailClient({ formationId: propId }: FormationDetailClientProps) {
  const params = useParams();
  const formationId = propId || (params?.id as string);
  const [formation, setFormation] = useState<FormationDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeModule, setActiveModule] = useState<number | null>(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [enrollmentId, setEnrollmentId] = useState<string | null>(null);
  const { user } = useAuthStore();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await formationsApi.getById(formationId);
        setFormation(data);

        // Vérifier si l'utilisateur est inscrit
        if (user) {
          const enrollments = await enrollmentsApi.getMine();
          const enrollment = enrollments.find((e) => e.formationId === formationId);
          if (enrollment) {
            setIsEnrolled(true);
            setEnrollmentId(enrollment.id);
          }
        }
      } catch (error) {
        console.error('Failed to fetch formation:', error);
        toast.error('Erreur lors du chargement de la formation');
      } finally {
        setLoading(false);
      }
    };

    if (formationId) {
      fetchData();
    }
  }, [formationId, user]);

  const handleEnroll = async () => {
    if (!user) {
      toast.error('Veuillez vous connecter pour vous inscrire');
      return;
    }

    if (!formation) return;

    if (isEnrolled) {
      window.location.href = `/cours/${formation.id}`;
      return;
    }

    try {
      const enrollment = await enrollmentsApi.create(formation.id);
      setIsEnrolled(true);
      setEnrollmentId(enrollment.id);
      toast.success('Inscription réussie ! Bonne formation 🎉');
    } catch (error: any) {
      if (error.status === 409) {
        setIsEnrolled(true);
        toast.success('Vous êtes déjà inscrit !');
      } else {
        toast.error(error.message || "Erreur lors de l'inscription");
      }
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-light">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-gray-600 font-medium">Chargement de la formation...</p>
        </div>
      </div>
    );
  }

  if (!formation) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Formation non trouvée</h1>
          <Link href="/formations" className="text-blue-600 hover:underline">
            Retour aux formations
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-light">
      {/* Hero */}
      <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-4">
          <Link href="/formations" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8">
            <ArrowLeft size={20} />
            Retour aux formations
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-white/20 px-4 py-1 rounded-full text-sm">
                  {formation.category?.name || 'Formation'}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{formation.title}</h1>
              <p className="text-xl text-blue-100 mb-8">{formation.fullDescription || formation.shortDescription}</p>
              
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <Clock size={20} />
                  <span>{formation.duration} min</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users size={20} />
                  <span>{formation.students || formation._count?.enrollments || 0} apprenants</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award size={20} />
                  <span>{formation.level}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star size={20} className="text-yellow-400 fill-current" />
                  <span>{formation.rating?.toFixed(1) || '4.8'}/5</span>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                {formation.price === 0 ? (
                  <span className="text-4xl font-bold text-green-400">Gratuit</span>
                ) : (
                  <span className="text-4xl font-bold">{formation.price.toLocaleString()} XOF</span>
                )}
                <button
                  className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-colors"
                  onClick={handleEnroll}
                >
                  {isEnrolled ? 'Continuer la formation' : formation.price === 0 ? 'Commencer maintenant' : 'S\'inscrire'}
                </button>
                <button 
                  onClick={() => setIsFavorite(!isFavorite)}
                  className={`p-4 rounded-xl border-2 transition-colors ${isFavorite ? 'border-red-500 bg-red-50 text-red-500' : 'border-white/30 text-white hover:bg-white/10'}`}
                >
                  <Heart size={24} fill={isFavorite ? 'currentColor' : 'none'} />
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 flex items-center justify-center">
                <BookOpen size={120} className="text-white/30" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Description */}
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <h2 className="text-2xl font-bold mb-6">Description de la formation</h2>
              <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                {formation.fullDescription || formation.shortDescription || "Aucune description détaillée disponible."}
              </div>
            </div>

            {/* Objectifs */}
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <h2 className="text-2xl font-bold mb-6">Objectifs de la formation</h2>
              <ul className="space-y-4">
                {(formation.objectives || [
                  "Maîtriser les concepts fondamentaux de la thématique",
                  "Acquérir des compétences pratiques directement utilisables",
                  "Valider vos acquis par une évaluation finale"
                ]).map((objective, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{objective}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Programme */}
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Programme de la formation</h2>
                <span className="text-sm text-gray-500">{formation.modules.length} modules</span>
              </div>
              <div className="space-y-3">
                {formation.modules.map((module, index) => (
                  <div key={module.id || index} className="border border-gray-200 rounded-xl overflow-hidden">
                    <button
                      onClick={() => isEnrolled ? setActiveModule(activeModule === index ? null : index) : undefined}
                      className={`w-full p-4 flex items-center justify-between transition-colors ${isEnrolled ? 'hover:bg-gray-50 cursor-pointer' : 'cursor-default'}`}
                    >
                      <div className="flex items-center gap-4">
                        <span className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold flex-shrink-0">
                          {index + 1}
                        </span>
                        <span className="font-semibold text-gray-800 text-left">{module.title}</span>
                      </div>
                      <div className="flex items-center gap-3 flex-shrink-0 ml-4">
                        <span className="text-gray-400 text-sm">{module.contents?.length || 0} leçons</span>
                        {isEnrolled && (
                          activeModule === index ? <ChevronUp size={18} className="text-gray-400" /> : <ChevronDown size={18} className="text-gray-400" />
                        )}
                      </div>
                    </button>

                    {/* Contenus : uniquement si inscrit ET module ouvert */}
                    {isEnrolled && activeModule === index && module.contents && module.contents.length > 0 && (
                      <div className="border-t border-gray-100 bg-gray-50">
                        <ul className="py-2">
                          {module.contents.map((content) => (
                            <li key={content.id}>
                              <a
                                href={`/cours/${formation.id}?lecon=${content.id}`}
                                className="flex items-center gap-3 px-6 py-2.5 hover:bg-blue-50 transition-colors group"
                              >
                                <Play size={13} className="text-blue-500 flex-shrink-0" />
                                <span className="text-sm text-gray-700 group-hover:text-blue-700">{content.title}</span>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Message si non inscrit */}
              {!isEnrolled && (
                <div className="mt-4 p-4 bg-blue-50 rounded-xl flex items-center gap-3">
                  <BookOpen size={20} className="text-blue-500 flex-shrink-0" />
                  <p className="text-sm text-blue-700">
                    Inscrivez-vous pour accéder au détail des leçons de chaque module.
                  </p>
                </div>
              )}
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="space-y-6">
            {/* Features */}
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="text-lg font-bold mb-4">Cette formation inclut</h3>
              <ul className="space-y-3">
                {(formation.features || ["Accès illimité à vie", "Supports de cours complets", "Accès sur mobile et TV"]).map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="text-green-500" size={18} />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
                <li className="flex items-center gap-3">
                  <Award className="text-blue-500" size={18} />
                  <span>Certificat de completion</span>
                </li>
              </ul>
            </div>
            
            {/* Share */}
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="text-lg font-bold mb-4">Partager cette formation</h3>
              <div className="flex gap-3">
                <button className="flex-1 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Partager
                </button>
                <button className="py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <Share2 size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
