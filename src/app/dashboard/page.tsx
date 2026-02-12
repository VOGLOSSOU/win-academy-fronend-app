'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import {
  BookOpen,
  Clock,
  Award,
  TrendingUp,
  Play,
  CheckCircle,
  Calendar,
  ChevronRight,
  Target,
  Zap,
  Users,
  FileText,
  BarChart3,
  Settings,
  Bell
} from 'lucide-react';

// Données simulées pour l'apprenant
const userData = {
  firstName: 'Nathan',
  lastName: 'VOGLOSSOU',
  email: 'nathan@example.com',
  avatar: '/images/avatar.png',
  memberSince: 'Janvier 2025',
  stats: {
    coursesInProgress: 3,
    coursesCompleted: 2,
    hoursLearned: 47,
    certificates: 1,
  },
  enrolledCourses: [
    {
      id: 1,
      title: 'HTML & CSS Fondamentaux',
      progress: 100,
      totalModules: 12,
      completedModules: 12,
      nextLesson: 'Projet final',
      image: '/images/course-html.png',
      lastAccessed: 'Aujourd\'hui',
    },
    {
      id: 2,
      title: 'JavaScript pour débutants',
      progress: 65,
      totalModules: 18,
      completedModules: 12,
      nextLesson: 'Module 13: Les événements',
      image: '/images/course-js.png',
      lastAccessed: 'Aujourd\'hui',
    },
    {
      id: 3,
      title: 'Marketing Digital',
      progress: 30,
      totalModules: 10,
      completedModules: 3,
      nextLesson: 'Module 4: SEO avancé',
      image: '/images/course-marketing.png',
      lastAccessed: 'Hier',
    },
    {
      id: 4,
      title: 'Excel Avancé',
      progress: 0,
      totalModules: 15,
      completedModules: 0,
      nextLesson: 'Module 1: Introduction',
      image: '/images/course-excel.png',
      lastAccessed: 'Il y a 3 jours',
    },
  ],
  certificates: [
    {
      id: 1,
      title: 'HTML & CSS Fondamentaux',
      date: '15 Février 2025',
      qrCode: '/images/qr-certificate.png',
    },
  ],
  upcomingLessons: [
    {
      id: 1,
      course: 'JavaScript pour débutants',
      lesson: 'Les événements DOM',
      duration: '25 min',
      date: 'Aujourd\'hui',
    },
    {
      id: 2,
      course: 'Marketing Digital',
      lesson: 'Module 4: SEO avancé',
      duration: '40 min',
      date: 'Aujourd\'hui',
    },
    {
      id: 3,
      course: 'Excel Avancé',
      lesson: 'Module 1: Introduction',
      duration: '30 min',
      date: 'Demain',
    },
  ],
  achievements: [
    { icon: Target, title: 'Premier cours complété', date: '20 Jan 2025' },
    { icon: Zap, title: '7 jours consécutifs', date: '10 Fév 2025' },
    { icon: Award, title: 'Premier certificat', date: '15 Fév 2025' },
  ],
};

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-light">
        {/* Header Dashboard */}
        <section className="pt-56 pb-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-primary-light flex items-center justify-center overflow-hidden">
                  <span className="text-primary font-bold text-2xl">
                    {userData.firstName[0]}{userData.lastName[0]}
                  </span>
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-dark">
                    Bonjour, {userData.firstName} 👋
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
                  {[
                    {
                      icon: BookOpen,
                      label: 'Formations en cours',
                      value: userData.stats.coursesInProgress,
                      color: 'primary',
                    },
                    {
                      icon: CheckCircle,
                      label: 'Formations terminées',
                      value: userData.stats.coursesCompleted,
                      color: 'green',
                    },
                    {
                      icon: Clock,
                      label: 'Heures d\'apprentissage',
                      value: userData.stats.hoursLearned,
                      color: 'blue',
                    },
                    {
                      icon: Award,
                      label: 'Certificats obtenus',
                      value: userData.stats.certificates,
                      color: 'yellow',
                    },
                  ].map((stat, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                      <div className={`w-12 h-12 rounded-lg bg-${stat.color}-light flex items-center justify-center mb-4`}>
                        <stat.icon className={`text-${stat.color}`} size={24} />
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
                        <Link href="/dashboard#courses" className="text-primary hover:underline text-sm font-medium">
                          Voir tout
                        </Link>
                      </div>
                      <div className="space-y-4">
                        {userData.enrolledCourses.filter(c => c.progress < 100).slice(0, 3).map((course) => (
                          <Link
                            key={course.id}
                            href={`/formations/${course.id}`}
                            className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors border border-gray-100"
                          >
                            <div className="w-16 h-16 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden flex-shrink-0">
                              <BookOpen className="text-gray-400" size={24} />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="font-semibold text-dark truncate">{course.title}</h3>
                              <p className="text-sm text-gray-600 mb-2">
                                {course.completedModules}/{course.totalModules} modules • Prochaine: {course.nextLesson}
                              </p>
                              <div className="flex items-center gap-3">
                                <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                                  <div
                                    className="h-full bg-primary rounded-full transition-all"
                                    style={{ width: `${course.progress}%` }}
                                  ></div>
                                </div>
                                <span className="text-sm font-medium text-primary">{course.progress}%</span>
                              </div>
                            </div>
                            <button className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white flex-shrink-0 hover:bg-primary/90 transition-colors">
                              <Play size={18} fill="currentColor" />
                            </button>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Upcoming Lessons */}
                    <div className="bg-white rounded-xl shadow-md p-6">
                      <h2 className="text-xl font-bold text-dark mb-6">Prochaines leçons</h2>
                      <div className="space-y-3">
                        {userData.upcomingLessons.map((lesson) => (
                          <div
                            key={lesson.id}
                            className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
                          >
                            <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center text-white flex-shrink-0">
                              <Play size={20} fill="currentColor" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-medium text-dark truncate">{lesson.lesson}</h4>
                              <p className="text-sm text-gray-600">{lesson.course}</p>
                            </div>
                            <div className="text-right flex-shrink-0">
                              <p className="text-sm font-medium text-primary">{lesson.duration}</p>
                              <p className="text-xs text-gray-500">{lesson.date}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Sidebar */}
                  <div className="space-y-6">
                    {/* Achievements */}
                    <div className="bg-white rounded-xl shadow-md p-6">
                      <h2 className="text-xl font-bold text-dark mb-4">Derniers badges</h2>
                      <div className="space-y-3">
                        {userData.achievements.map((achievement, index) => (
                          <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-gray-50">
                            <div className="w-10 h-10 rounded-lg bg-primary-light flex items-center justify-center">
                              <achievement.icon className="text-primary" size={20} />
                            </div>
                            <div>
                              <p className="font-medium text-dark text-sm">{achievement.title}</p>
                              <p className="text-xs text-gray-500">{achievement.date}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      <Link href="/dashboard#achievements" className="block text-center text-primary font-medium text-sm mt-4 hover:underline">
                        Voir tous les badges
                      </Link>
                    </div>

                    {/* Quick Actions */}
                    <div className="bg-white rounded-xl shadow-md p-6">
                      <h2 className="text-xl font-bold text-dark mb-4">Actions rapides</h2>
                      <div className="space-y-3">
                        <Link
                          href="/formations"
                          className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <div className="w-10 h-10 rounded-lg bg-primary-light flex items-center justify-center">
                            <BookOpen className="text-primary" size={20} />
                          </div>
                          <span className="font-medium text-dark">Parcourir les formations</span>
                        </Link>
                        <Link
                          href="/dashboard#certificates"
                          className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                            <Award className="text-green-600" size={20} />
                          </div>
                          <span className="font-medium text-dark">Télécharger mes certificats</span>
                        </Link>
                        <Link
                          href="/a-propos"
                          className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                            <Users className="text-blue-600" size={20} />
                          </div>
                          <span className="font-medium text-dark">Inviter un ami</span>
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
                  <Link href="/formations" className="btn-primary">
                    Découvrir plus de formations
                  </Link>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {userData.enrolledCourses.map((course) => (
                    <div key={course.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="h-40 bg-gray-100 flex items-center justify-center relative">
                        <BookOpen className="text-gray-300" size={48} />
                        {course.progress === 100 && (
                          <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                            <CheckCircle size={12} />
                            Terminé
                          </div>
                        )}
                      </div>
                      <div className="p-6">
                        <h3 className="font-bold text-dark mb-2">{course.title}</h3>
                        <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                          <span>{course.completedModules}/{course.totalModules} modules</span>
                          <span>•</span>
                          <span>{course.lastAccessed}</span>
                        </div>
                        <div className="mb-4">
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-gray-600">Progression</span>
                            <span className="font-medium text-primary">{course.progress}%</span>
                          </div>
                          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-primary rounded-full transition-all"
                              style={{ width: `${course.progress}%` }}
                            ></div>
                          </div>
                        </div>
                        <Link
                          href={`/formations/${course.id}`}
                          className="flex items-center justify-center gap-2 w-full py-3 bg-primary-light text-primary font-medium rounded-lg hover:bg-primary hover:text-white transition-colors"
                        >
                          {course.progress === 0 ? 'Commencer' : course.progress === 100 ? 'Revoir' : 'Continuer'}
                          <ChevronRight size={18} />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'certificates' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-dark">Mes certificats</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {userData.certificates.map((cert) => (
                    <div key={cert.id} className="bg-white rounded-xl shadow-md overflow-hidden">
                      <div className="h-48 bg-gradient-to-br from-primary to-blue-500 flex items-center justify-center relative">
                        <Award className="text-white" size={64} />
                        <div className="absolute bottom-3 left-3 right-3 bg-white/90 rounded-lg p-3">
                          <p className="font-bold text-dark text-center">{cert.title}</p>
                        </div>
                      </div>
                      <div className="p-6">
                        <p className="text-gray-600 mb-4">Obtenu le {cert.date}</p>
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
                {userData.certificates.length === 0 && (
                  <div className="text-center py-16 bg-white rounded-xl shadow-md">
                    <Award className="mx-auto text-gray-300 mb-4" size={64} />
                    <h3 className="text-xl font-semibold text-dark mb-2">Aucun certificat pour le moment</h3>
                    <p className="text-gray-600 mb-6">Complétez votre première formation pour obtenir un certificat !</p>
                    <Link href="/formations" className="btn-primary">
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
                  {userData.enrolledCourses.map((course) => (
                    <div key={course.id} className="bg-white rounded-xl shadow-md p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-bold text-dark truncate pr-4">{course.title}</h3>
                        <span className="text-primary font-bold">{course.progress}%</span>
                      </div>
                      <div className="h-4 bg-gray-200 rounded-full overflow-hidden mb-4">
                        <div
                          className={`h-full rounded-full transition-all ${
                            course.progress === 100 ? 'bg-green-500' : 'bg-primary'
                          }`}
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-sm text-gray-600 mb-4">
                        <span>{course.completedModules} modules complétés</span>
                        <span>{course.totalModules - course.completedModules} restants</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">Dernière activité: {course.lastAccessed}</span>
                        <Link href={`/formations/${course.id}`} className="text-primary font-medium hover:underline">
                          {course.progress === 0 ? 'Commencer' : course.progress === 100 ? 'Revoir' : 'Continuer'}
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
