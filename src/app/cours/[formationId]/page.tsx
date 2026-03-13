'use client';

import { useEffect, useState, Suspense } from 'react';
import { useParams, useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  ChevronDown, ChevronUp, CheckCircle, Circle, BookOpen,
  ArrowLeft, Menu, X, FileText, Award, Loader2,
} from 'lucide-react';
import {
  formationsApi, enrollmentsApi, contentsApi, getAccessToken,
  type FormationDetail, type Content, type Enrollment,
} from '@/lib/api';
import { useAuthStore } from '@/store/authStore';
import { toast } from 'react-hot-toast';

// ─── localStorage helpers ─────────────────────────────────────────────────────

function getCompletedIds(enrollmentId: string): string[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(`wa_progress_${enrollmentId}`);
    return raw ? JSON.parse(raw) : [];
  } catch { return []; }
}

function saveCompletedIds(enrollmentId: string, ids: string[]) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(`wa_progress_${enrollmentId}`, JSON.stringify(ids));
}

function getAllContents(formation: FormationDetail): Content[] {
  return formation.modules.flatMap(m => (m.contents || []) as Content[]);
}

// ─── Inner component (needs useSearchParams → wrapped in Suspense) ────────────

function CoursPlayer() {
  const params = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();
  const formationId = params.formationId as string;
  const activeContentId = searchParams.get('lecon');

  const { user } = useAuthStore();
  const [formation, setFormation] = useState<FormationDetail | null>(null);
  const [enrollment, setEnrollment] = useState<Enrollment | null>(null);
  const [currentContent, setCurrentContent] = useState<Content | null>(null);
  const [completedIds, setCompletedIds] = useState<string[]>([]);
  const [loadingContent, setLoadingContent] = useState(false);
  const [loadingPage, setLoadingPage] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [expandedModules, setExpandedModules] = useState<Set<number>>(new Set([0]));

  // ── Charge la formation + l'inscription ──────────────────────────────────────
  useEffect(() => {
    if (!formationId) return;

    // Si user est null, on vérifie s'il y a un token en localStorage.
    // Si pas de token → non connecté → redirection login.
    // Si token présent mais user encore null → store Zustand pas encore hydraté
    // → on attend le prochain render (user dans les deps).
    if (!user) {
      const token = getAccessToken();
      if (!token) {
        setLoadingPage(false);
        router.push('/connexion');
      }
      // Sinon on attend que user soit disponible, l'effet se re-déclenchera
      return;
    }

    const init = async () => {
      try {
        setLoadingPage(true);
        const [formationData, enrollments] = await Promise.all([
          formationsApi.getById(formationId),
          enrollmentsApi.getMine(),
        ]);

        setFormation(formationData);

        const found = enrollments.find(e => e.formationId === formationId);
        if (!found) {
          toast.error('Vous devez être inscrit pour accéder à ce cours');
          router.push(`/formations/${formationId}`);
          return;
        }
        setEnrollment(found);

        const completed = getCompletedIds(found.id);
        setCompletedIds(completed);

        // Choisir la leçon à afficher
        const allContents = getAllContents(formationData);
        const targetId = activeContentId ?? allContents[0]?.id;
        if (targetId) {
          await loadContent(targetId);
          // Ouvrir le module qui contient la leçon active
          formationData.modules.forEach((mod, idx) => {
            if (mod.contents?.some(c => c.id === targetId)) {
              setExpandedModules(prev => new Set([...prev, idx]));
            }
          });
        }
      } catch {
        toast.error('Erreur lors du chargement du cours');
      } finally {
        setLoadingPage(false);
      }
    };

    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formationId, user]);

  // ── Recharge le contenu quand le param URL change ────────────────────────────
  useEffect(() => {
    if (activeContentId) loadContent(activeContentId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeContentId]);

  const loadContent = async (contentId: string) => {
    try {
      setLoadingContent(true);
      const content = await contentsApi.getById(contentId);
      setCurrentContent(content);
    } catch {
      toast.error('Erreur lors du chargement de la leçon');
    } finally {
      setLoadingContent(false);
    }
  };

  const navigateTo = (contentId: string) => {
    router.push(`/cours/${formationId}?lecon=${contentId}`);
    setSidebarOpen(false);
  };

  const toggleModule = (idx: number) => {
    setExpandedModules(prev => {
      const next = new Set(prev);
      next.has(idx) ? next.delete(idx) : next.add(idx);
      return next;
    });
  };

  const markAsComplete = async () => {
    if (!currentContent || !enrollment || !formation) return;

    const contentId = currentContent.id;
    const allContents = getAllContents(formation);

    // Si déjà terminé → juste passer à la suivante
    if (completedIds.includes(contentId)) {
      goToNext();
      return;
    }

    const newCompleted = [...completedIds, contentId];
    setCompletedIds(newCompleted);
    saveCompletedIds(enrollment.id, newCompleted);

    const percentage = Math.min(Math.round((newCompleted.length / allContents.length) * 100), 100);

    try {
      await enrollmentsApi.updateProgress(enrollment.id, percentage);
      if (percentage >= 100) {
        toast.success('Formation terminée ! Passez maintenant l\'évaluation 🎉');
      } else {
        toast.success('Leçon terminée !');
        goToNext();
      }
    } catch {
      toast.error('Erreur lors de la mise à jour de la progression');
    }
  };

  const goToNext = () => {
    if (!formation || !currentContent) return;
    const all = getAllContents(formation);
    const idx = all.findIndex(c => c.id === currentContent.id);
    if (idx < all.length - 1) navigateTo(all[idx + 1].id);
  };

  const goToPrev = () => {
    if (!formation || !currentContent) return;
    const all = getAllContents(formation);
    const idx = all.findIndex(c => c.id === currentContent.id);
    if (idx > 0) navigateTo(all[idx - 1].id);
  };

  // ── Loading / guards ──────────────────────────────────────────────────────────
  if (loadingPage) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="w-10 h-10 text-blue-600 animate-spin" />
          <p className="text-gray-600 font-medium">Chargement du cours...</p>
        </div>
      </div>
    );
  }

  if (!formation || !enrollment) return null;

  const allContents = getAllContents(formation);
  const totalLessons = allContents.length;
  const completedCount = completedIds.length;
  const progressPercent = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;
  const currentIdx = currentContent ? allContents.findIndex(c => c.id === currentContent.id) : -1;
  const isLastLesson = currentIdx === allContents.length - 1;
  const isCurrentDone = currentContent ? completedIds.includes(currentContent.id) : false;
  const allDone = completedCount >= totalLessons;

  // ── Render ───────────────────────────────────────────────────────────────────
  return (
    <div className="h-screen flex flex-col bg-gray-100 overflow-hidden">

      {/* ── Top bar ── */}
      <header className="h-14 bg-white border-b border-gray-200 flex items-center px-4 gap-4 flex-shrink-0 z-10">
        <button onClick={() => setSidebarOpen(true)} className="lg:hidden p-2 rounded-lg hover:bg-gray-100">
          <Menu size={20} />
        </button>

        <Link
          href={`/formations/${formationId}`}
          className="flex items-center gap-2 text-gray-500 hover:text-gray-800 text-sm transition-colors"
        >
          <ArrowLeft size={16} />
          <span className="hidden sm:inline">Retour</span>
        </Link>

        <div className="flex-1 min-w-0">
          <h1 className="text-sm font-semibold text-gray-800 truncate">{formation.title}</h1>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2">
            <div className="w-28 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-blue-600 rounded-full transition-all" style={{ width: `${progressPercent}%` }} />
            </div>
            <span className="text-xs font-semibold text-blue-600">{progressPercent}%</span>
          </div>

          {allDone && formation.evaluation && (
            <Link
              href={`/evaluation/${formation.evaluation.id}?enrollmentId=${enrollment.id}&formationId=${formationId}`}
              className="px-4 py-1.5 bg-green-600 text-white text-sm font-semibold rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2"
            >
              <Award size={15} />
              Quiz final
            </Link>
          )}
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden relative">

        {/* ── Overlay mobile ── */}
        {sidebarOpen && (
          <div className="fixed inset-0 bg-black/40 z-20 lg:hidden" onClick={() => setSidebarOpen(false)} />
        )}

        {/* ── Sidebar ── */}
        <aside className={`
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0
          fixed lg:relative left-0 top-14 bottom-0 z-30
          w-80 bg-white border-r border-gray-200 flex flex-col overflow-hidden
          transition-transform duration-200
        `}>
          {/* Header sidebar */}
          <div className="p-4 border-b border-gray-100 flex-shrink-0">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">Contenu</span>
              <button onClick={() => setSidebarOpen(false)} className="lg:hidden p-1 hover:bg-gray-100 rounded">
                <X size={16} />
              </button>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-gray-500">{completedCount}/{totalLessons} leçons</span>
              <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-blue-600 rounded-full transition-all" style={{ width: `${progressPercent}%` }} />
              </div>
              <span className="font-bold text-blue-600 text-xs">{progressPercent}%</span>
            </div>
          </div>

          {/* Liste des modules */}
          <div className="flex-1 overflow-y-auto">
            {formation.modules.map((module, modIdx) => (
              <div key={module.id || modIdx} className="border-b border-gray-100">
                <button
                  onClick={() => toggleModule(modIdx)}
                  className="w-full px-4 py-3 flex items-center gap-3 hover:bg-gray-50 transition-colors text-left"
                >
                  <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 text-xs font-bold flex items-center justify-center flex-shrink-0">
                    {modIdx + 1}
                  </span>
                  <span className="flex-1 text-sm font-medium text-gray-800 leading-tight">{module.title}</span>
                  {expandedModules.has(modIdx)
                    ? <ChevronUp size={14} className="text-gray-400 flex-shrink-0" />
                    : <ChevronDown size={14} className="text-gray-400 flex-shrink-0" />
                  }
                </button>

                {expandedModules.has(modIdx) && (
                  <div className="bg-gray-50 pb-1">
                    {(module.contents || []).map(c => {
                      const done = completedIds.includes(c.id);
                      const active = currentContent?.id === c.id;
                      return (
                        <button
                          key={c.id}
                          onClick={() => navigateTo(c.id)}
                          className={`w-full px-4 py-2.5 flex items-center gap-3 text-left transition-colors border-l-2
                            ${active ? 'bg-blue-50 border-blue-600' : 'border-transparent hover:bg-gray-100'}
                          `}
                        >
                          {done
                            ? <CheckCircle size={14} className="text-green-500 flex-shrink-0" />
                            : <Circle size={14} className={`flex-shrink-0 ${active ? 'text-blue-500' : 'text-gray-300'}`} />
                          }
                          <span className={`text-sm leading-tight ${active ? 'text-blue-700 font-semibold' : done ? 'text-gray-400 line-through' : 'text-gray-700'}`}>
                            {c.title}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
          </div>
        </aside>

        {/* ── Zone principale ── */}
        <main className="flex-1 min-h-0 overflow-y-auto">
          {loadingContent ? (
            <div className="flex-1 flex items-center justify-center h-full">
              <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
            </div>
          ) : !currentContent ? (
            <div className="flex items-center justify-center h-full text-gray-400">
              <div className="text-center">
                <BookOpen size={48} className="mx-auto mb-4 text-gray-300" />
                <p>Sélectionnez une leçon dans le menu</p>
              </div>
            </div>
          ) : (
            <div className="w-full max-w-4xl mx-auto px-8 py-10">

              {/* Fil d'Ariane */}
              <p className="text-sm text-gray-400 mb-2">{currentContent.module?.title}</p>

              {/* Titre de la leçon */}
              <h2 className="text-3xl font-bold text-gray-900 mb-8 leading-snug">{currentContent.title}</h2>

              {/* Contenu */}
              <div className="bg-white rounded-2xl shadow-sm p-10 mb-8">
                {currentContent.type === 'TEXT' && (
                  <div className="text-gray-800 text-lg leading-[1.9] whitespace-pre-wrap space-y-4">
                    {currentContent.body || 'Contenu non disponible pour le moment.'}
                  </div>
                )}
                {currentContent.type === 'VIDEO' && currentContent.url && (
                  <div className="aspect-video rounded-xl overflow-hidden bg-black">
                    <iframe src={currentContent.url} className="w-full h-full" allowFullScreen title={currentContent.title} />
                  </div>
                )}
                {currentContent.type === 'VIDEO' && !currentContent.url && (
                  <p className="text-gray-400 text-center py-12">Vidéo non disponible.</p>
                )}
                {currentContent.type === 'PDF' && currentContent.url && (
                  <div className="space-y-4">
                    <iframe src={currentContent.url} className="w-full h-[600px] rounded-xl border" title={currentContent.title} />
                    <a href={currentContent.url} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-600 hover:underline text-sm">
                      <FileText size={15} /> Ouvrir dans un nouvel onglet
                    </a>
                  </div>
                )}
              </div>

              {/* Navigation */}
              <div className="flex items-center gap-4">
                <button
                  onClick={goToPrev}
                  disabled={currentIdx <= 0}
                  className="px-6 py-3.5 border border-gray-200 rounded-xl text-gray-600 hover:bg-gray-50 transition-colors disabled:opacity-40 disabled:cursor-not-allowed font-semibold text-base"
                >
                  ← Précédent
                </button>

                <button
                  onClick={markAsComplete}
                  className={`flex-1 py-3.5 rounded-xl font-bold text-base transition-colors ${
                    isCurrentDone
                      ? 'bg-green-50 text-green-700 border border-green-200 hover:bg-green-100'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  {isCurrentDone
                    ? isLastLesson ? '✓ Formation terminée' : '✓ Continuer →'
                    : isLastLesson ? 'Terminer la formation' : 'Marquer comme terminé →'
                  }
                </button>

                <button
                  onClick={goToNext}
                  disabled={currentIdx >= allContents.length - 1}
                  className="px-5 py-3 border border-gray-200 rounded-xl text-gray-600 hover:bg-gray-50 transition-colors disabled:opacity-40 disabled:cursor-not-allowed font-medium text-sm"
                >
                  Suivant →
                </button>
              </div>

              {/* Bannière fin de formation */}
              {allDone && (
                <div className="mt-8 p-6 bg-green-50 border border-green-200 rounded-2xl text-center">
                  <Award className="w-12 h-12 text-green-500 mx-auto mb-3" />
                  <h3 className="text-xl font-bold text-green-800 mb-2">Formation complétée !</h3>
                  <p className="text-green-700 mb-5">
                    Bravo ! Toutes les leçons sont terminées. Passez l'évaluation finale pour obtenir votre certificat.
                  </p>
                  {formation.evaluation && (
                    <Link
                      href={`/evaluation/${formation.evaluation.id}?enrollmentId=${enrollment.id}&formationId=${formationId}`}
                      className="inline-flex items-center gap-2 px-8 py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-colors"
                    >
                      <Award size={20} />
                      Passer l'évaluation finale
                    </Link>
                  )}
                </div>
              )}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

// ─── Page wrapper avec Suspense (requis par useSearchParams) ─────────────────

export default function CoursPlayerPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Loader2 className="w-10 h-10 text-blue-600 animate-spin" />
      </div>
    }>
      <CoursPlayer />
    </Suspense>
  );
}
