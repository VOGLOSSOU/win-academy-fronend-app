'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useAuthStore } from '@/store/authStore';
import { dashboardApi, enrollmentsApi, DashboardData } from '@/lib/api';
import { toast } from 'react-hot-toast';
import {
  BookOpen,
  Clock,
  Award,
  TrendingUp,
  Play,
  CheckCircle,
  ChevronRight,
  Zap,
  FileText,
  BarChart3,
  Settings,
  Bell,
  Trash2,
} from 'lucide-react';

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [unenrolling, setUnenrolling] = useState<string | null>(null);
  const { user } = useAuthStore();

  const handleUnenroll = async (enrollmentId: string, formationTitle: string) => {
    if (!confirm(`Se désinscrire de "${formationTitle}" ? Cette action est irréversible.`)) return;
    try {
      setUnenrolling(enrollmentId);
      await enrollmentsApi.delete(enrollmentId);
      setDashboardData((prev) => prev ? {
        ...prev,
        enrollments: prev.enrollments.filter((e) => e.id !== enrollmentId),
      } : prev);
      toast.success('Désinscription effectuée');
    } catch {
      toast.error('Erreur lors de la désinscription');
    } finally {
      setUnenrolling(null);
    }
  };

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setLoading(true);
        const data = await dashboardApi.getData();
        setDashboardData(data);
      } catch (error) {
        console.error('Failed to fetch dashboard data:', error);
        toast.error('Erreur lors du chargement de votre espace personnel');
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-light">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-gray-600 font-medium">Chargement de votre espace...</p>
        </div>
      </div>
    );
  }

  if (!dashboardData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-light">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Erreur de chargement</h1>
          <button 
            onClick={() => window.location.reload()}
            className="text-white bg-primary px-6 py-2 rounded-lg"
          >
            Réessayer
          </button>
        </div>
      </div>
    );
  }

  const enrolledCourses = dashboardData.enrollments || [];
  const completedCourses = enrolledCourses.filter(e => e.status === 'COMPLETED');
  const certificates = dashboardData.certificates || [];

  const stats = [
    {
      icon: BookOpen,
      label: 'Formations en cours',
      value: enrolledCourses.length - completedCourses.length,
      color: 'primary',
    },
    {
      icon: CheckCircle,
      label: 'Formations terminées',
      value: completedCourses.length,
      color: 'green',
    },
    {
      icon: Clock,
      label: 'Heures d\'apprentissage',
      value: enrolledCourses.length * 2, // Approximation
      color: 'blue',
    },
    {
      icon: Award,
      label: 'Certificats obtenus',
      value: certificates.length,
      color: 'yellow',
    },
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-light">
        {/* Header Dashboard */}
        <section className="pt-40 lg:pt-48 pb-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center overflow-hidden">
                  <span className="text-primary font-bold text-2xl">
                    {dashboardData.firstName?.[0]}{dashboardData.lastName?.[0]}
                  </span>
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-dark">
                    Bonjour, {dashboardData.firstName} 👋
                  </h1>
                  <p className="text-gray-600">
                    Bienvenue sur votre espace d'apprentissage
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button className="p-2 rounded-full hover:bg-gray-100 transition-colors relative">
                  <Bell size={24} className="text-gray-600" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>
                <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                  <Settings size={24} className="text-gray-600" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Tabs Navigation */}
        <section className="bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="flex gap-8 overflow-x-auto">
              {[
                { id: 'overview', label: 'Aperçu', icon: BarChart3 },
                { id: 'courses', label: 'Mes formations', icon: BookOpen },
                { id: 'certificates', label: 'Certificats', icon: Award },
                { id: 'progress', label: 'Progression', icon: TrendingUp },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 py-4 px-2 border-b-2 whitespace-nowrap transition-colors ${
                    activeTab === tab.id
                      ? 'border-primary text-primary'
                      : 'border-transparent text-gray-600 hover:text-dark'
                  }`}
                >
                  <tab.icon size={20} />
                  <span className="font-medium">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Dashboard Content */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            {activeTab === 'overview' && (
              <div className="space-y-8">
                {/* Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-gray-50`}>
                        <stat.icon className={`text-primary`} size={24} />
                      </div>
                      <p className="text-3xl font-bold text-dark mb-1">{stat.value}</p>
                      <p className="text-gray-600 text-sm">{stat.label}</p>
                    </div>
                  ))}
                </div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Continue Learning */}
                  <div className="lg:col-span-2 space-y-6">
                    <div className="bg-white rounded-xl shadow-md p-6">
                      <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-bold text-dark">Continuer l'apprentissage</h2>
                        <button onClick={() => setActiveTab('courses')} className="text-primary hover:underline text-sm font-medium">
                          Voir tout
                        </button>
                      </div>
                      <div className="space-y-4">
                        {enrolledCourses.length > 0 ? (
                          enrolledCourses.slice(0, 3).map((enrollment) => (
                            <Link
                              key={enrollment.id}
                              href={`/formations/${enrollment.formationId}`}
                              className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors border border-gray-100"
                            >
                              <div className="w-16 h-16 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden flex-shrink-0">
                                <BookOpen className="text-gray-400" size={24} />
                              </div>
                              <div className="flex-1 min-w-0">
                                <h3 className="font-semibold text-dark truncate">{enrollment.formation?.title || 'Formation'}</h3>
                                <p className="text-sm text-gray-600 mb-2">
                                  Progression: {enrollment.progressPercentage}%
                                </p>
                                <div className="flex items-center gap-3">
                                  <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                                    <div
                                      className="h-full bg-primary rounded-full transition-all"
                                      style={{ width: `${enrollment.progressPercentage}%` }}
                                    ></div>
                                  </div>
                                  <span className="text-sm font-medium text-primary">{enrollment.progressPercentage}%</span>
                                </div>
                              </div>
                              <button className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white flex-shrink-0 hover:bg-primary/90 transition-colors">
                                <Play size={18} fill="currentColor" />
                              </button>
                            </Link>
                          ))
                        ) : (
                          <div className="text-center py-8 text-gray-500">
                            Vous n'avez pas encore de formations en cours.
                            <Link href="/formations" className="block text-primary mt-2">Parcourir le catalogue</Link>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Sidebar */}
                  <div className="space-y-6">
                    {/* Quick Actions */}
                    <div className="bg-white rounded-xl shadow-md p-6">
                      <h2 className="text-xl font-bold text-dark mb-4">Actions rapides</h2>
                      <div className="space-y-3">
                        <Link
                          href="/formations"
                          className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                            <BookOpen className="text-primary" size={20} />
                          </div>
                          <span className="font-medium text-dark">Parcourir les formations</span>
                        </Link>
                        <Link
                          href="/dashboard#certificates"
                          className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center">
                            <Award className="text-green-600" size={20} />
                          </div>
                          <span className="font-medium text-dark">Mes certificats</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'courses' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-dark">Mes formations</h2>
                  <Link href="/formations" className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                    Découvrir plus de formations
                  </Link>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {enrolledCourses.length > 0 ? enrolledCourses.map((enrollment) => (
                    <div key={enrollment.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="h-40 bg-gray-100 flex items-center justify-center relative">
                        <BookOpen className="text-gray-300" size={48} />
                        {enrollment.status === 'COMPLETED' && (
                          <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                            <CheckCircle size={12} />
                            Terminé
                          </div>
                        )}
                      </div>
                      <div className="p-6">
                        <h3 className="font-bold text-dark mb-2">{enrollment.formation?.title || 'Formation'}</h3>
                        <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                          <span>Inscrit le {new Date(enrollment.enrolledAt).toLocaleDateString()}</span>
                        </div>
                        <div className="mb-4">
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-gray-600">Progression</span>
                            <span className="font-medium text-primary">{enrollment.progressPercentage}%</span>
                          </div>
                          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-primary rounded-full transition-all"
                              style={{ width: `${enrollment.progressPercentage}%` }}
                            ></div>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Link
                            href={`/formations/${enrollment.formationId}`}
                            className="flex-1 flex items-center justify-center gap-2 py-3 bg-primary-light text-primary font-medium rounded-lg hover:bg-primary hover:text-white transition-colors"
                          >
                            {enrollment.progressPercentage === 0 ? 'Commencer' : enrollment.progressPercentage === 100 ? 'Revoir' : 'Continuer'}
                            <ChevronRight size={18} />
                          </Link>
                          <button
                            onClick={() => handleUnenroll(enrollment.id, enrollment.formation?.title || 'cette formation')}
                            disabled={unenrolling === enrollment.id}
                            className="p-3 border border-red-200 text-red-500 rounded-lg hover:bg-red-50 transition-colors disabled:opacity-50"
                            title="Se désinscrire"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </div>
                    </div>
                  )) : (
                    <div className="col-span-full text-center py-16 bg-white rounded-xl shadow-md">
                      <BookOpen className="mx-auto text-gray-300 mb-4" size={64} />
                      <h3 className="text-xl font-semibold text-dark mb-2">Vous n'avez pas encore d'inscriptions</h3>
                      <p className="text-gray-600 mb-6">Explorez notre catalogue et trouvez votre prochaine formation !</p>
                      <Link href="/formations" className="px-6 py-2 bg-primary text-white rounded-lg">
                        Voir les formations
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            )}

            {activeTab === 'certificates' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-dark">Mes certificats</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {certificates.map((cert) => (
                    <div key={cert.id} className="bg-white rounded-xl shadow-md overflow-hidden">
                      <div className="h-48 bg-gradient-to-br from-primary to-blue-500 flex items-center justify-center relative">
                        <Award className="text-white" size={64} />
                        <div className="absolute bottom-3 left-3 right-3 bg-white/90 rounded-lg p-3">
                          <p className="font-bold text-dark text-center">{cert.uniqueCode}</p>
                        </div>
                      </div>
                      <div className="p-6">
                        <p className="text-gray-600 mb-4">Obtenu le {new Date(cert.issuedAt).toLocaleDateString()}</p>
                        <div className="flex gap-3">
                          <button className="flex-1 py-2 px-4 border border-gray-200 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                            <FileText size={18} />
                            PDF
                          </button>
                          <button className="flex-1 py-2 px-4 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
                            <Zap size={18} />
                            Partager
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {certificates.length === 0 && (
                  <div className="text-center py-16 bg-white rounded-xl shadow-md">
                    <Award className="mx-auto text-gray-300 mb-4" size={64} />
                    <h3 className="text-xl font-semibold text-dark mb-2">Aucun certificat pour le moment</h3>
                    <p className="text-gray-600 mb-6">Complétez votre première formation pour obtenir un certificat !</p>
                    <Link href="/formations" className="px-6 py-2 bg-primary text-white rounded-lg">
                      Voir les formations
                    </Link>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'progress' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-dark">Ma progression</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {enrolledCourses.map((enrollment) => (
                    <div key={enrollment.id} className="bg-white rounded-xl shadow-md p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-bold text-dark truncate pr-4">{enrollment.formation?.title || 'Formation'}</h3>
                        <span className="text-primary font-bold">{enrollment.progressPercentage}%</span>
                      </div>
                      <div className="h-4 bg-gray-200 rounded-full overflow-hidden mb-4">
                        <div
                          className={`h-full rounded-full transition-all ${
                            enrollment.progressPercentage === 100 ? 'bg-green-500' : 'bg-primary'
                          }`}
                          style={{ width: `${enrollment.progressPercentage}%` }}
                        ></div>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">Inscrit le {new Date(enrollment.enrolledAt).toLocaleDateString()}</span>
                        <Link href={`/formations/${enrollment.formationId}`} className="text-primary font-medium hover:underline">
                          Détails
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
