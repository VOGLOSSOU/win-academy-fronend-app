'use client';

import { useEffect, useState, Suspense, useCallback } from 'react';
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

// ─── Styles inline (bypasse tout CSS global) ─────────────────────────────────

const S = {
  root: {
    display: 'flex' as const,
    height: '100vh',
    overflow: 'hidden',
    backgroundColor: '#f3f4f6',
    fontFamily: 'Poppins, sans-serif',
  },
  sidebar: {
    width: '320px',
    flexShrink: 0,
    display: 'flex' as const,
    flexDirection: 'column' as const,
    backgroundColor: 'white',
    borderRight: '1px solid #e5e7eb',
    overflowY: 'auto' as const,
    zIndex: 10,
  },
  sidebarMobileHidden: {
    transform: 'translateX(-100%)',
    position: 'fixed' as const,
    inset: 0,
    width: '320px',
    display: 'flex' as const,
    flexDirection: 'column' as const,
    backgroundColor: 'white',
    borderRight: '1px solid #e5e7eb',
    overflowY: 'auto' as const,
    zIndex: 30,
    transition: 'transform 0.2s',
  },
  sidebarMobileVisible: {
    transform: 'translateX(0)',
    position: 'fixed' as const,
    top: 0,
    left: 0,
    bottom: 0,
    width: '320px',
    display: 'flex' as const,
    flexDirection: 'column' as const,
    backgroundColor: 'white',
    borderRight: '1px solid #e5e7eb',
    overflowY: 'auto' as const,
    zIndex: 30,
    transition: 'transform 0.2s',
  },
  contentArea: {
    flex: 1,
    display: 'flex' as const,
    flexDirection: 'column' as const,
    minWidth: 0,
    overflow: 'hidden',
  },
  topBar: {
    height: '56px',
    flexShrink: 0,
    display: 'flex' as const,
    alignItems: 'center' as const,
    padding: '0 16px',
    gap: '16px',
    backgroundColor: 'white',
    borderBottom: '1px solid #e5e7eb',
  },
  scrollArea: {
    flex: 1,
    overflowY: 'auto' as const,
    minHeight: 0,
  },
  contentWrapper: {
    maxWidth: '860px',
    margin: '0 auto',
    padding: '48px 40px',
  },
  lessonTitle: {
    fontSize: '30px',
    fontWeight: 700,
    color: '#111827',
    marginBottom: '32px',
    lineHeight: 1.3,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: '16px',
    padding: '48px',
    marginBottom: '40px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
  },
  bodyText: {
    fontSize: '18px',
    lineHeight: 1.9,
    color: '#1f2937',
    whiteSpace: 'pre-wrap' as const,
  },
};

// ─── Inner component ──────────────────────────────────────────────────────────

function CoursPlayer() {
  const params = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();
  const formationId = params.formationId as string;
  const initialContentId = searchParams.get('lecon');

  const { user, _hasHydrated } = useAuthStore();
  const [formation, setFormation] = useState<FormationDetail | null>(null);
  const [enrollment, setEnrollment] = useState<Enrollment | null>(null);
  const [currentContent, setCurrentContent] = useState<Content | null>(null);
  const [completedIds, setCompletedIds] = useState<string[]>([]);
  const [loadingContent, setLoadingContent] = useState(false);
  const [loadingPage, setLoadingPage] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [expandedModules, setExpandedModules] = useState<Set<number>>(new Set([0]));
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const loadContent = useCallback(async (contentId: string) => {
    try {
      setLoadingContent(true);
      const content = await contentsApi.getById(contentId);
      setCurrentContent(content);
    } catch {
      toast.error('Erreur lors du chargement de la leçon');
    } finally {
      setLoadingContent(false);
    }
  }, []);

  useEffect(() => {
    if (!formationId || !_hasHydrated) return;
    if (!user) {
      const token = getAccessToken();
      if (!token) { setLoadingPage(false); router.push('/connexion'); }
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
        const allContents = getAllContents(formationData);
        const targetId = initialContentId ?? allContents[0]?.id;
        if (targetId) {
          await loadContent(targetId);
          formationData.modules.forEach((mod, idx) => {
            if (mod.contents?.some(c => c.id === targetId)) {
              setExpandedModules(prev => { const s = new Set(prev); s.add(idx); return s; });
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
  }, [formationId, user, _hasHydrated]);

  const navigateTo = useCallback((contentId: string) => {
    loadContent(contentId);
    setSidebarOpen(false);
    window.history.replaceState(null, '', `/cours/${formationId}?lecon=${contentId}`);
  }, [formationId, loadContent]);

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
    if (completedIds.includes(contentId)) {
      const idx = allContents.findIndex(c => c.id === contentId);
      if (idx < allContents.length - 1) navigateTo(allContents[idx + 1].id);
      return;
    }
    const newCompleted = [...completedIds, contentId];
    setCompletedIds(newCompleted);
    saveCompletedIds(enrollment.id, newCompleted);
    const percentage = Math.min(Math.round((newCompleted.length / allContents.length) * 100), 100);
    if (percentage < 100) {
      toast.success('Leçon terminée !');
      const idx = allContents.findIndex(c => c.id === contentId);
      if (idx < allContents.length - 1) navigateTo(allContents[idx + 1].id);
    } else {
      toast.success('Formation terminée ! Bravo 🎉');
    }
    enrollmentsApi.updateProgress(enrollment.id, percentage).catch(() => {});
  };

  if (loadingPage) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f9fafb' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
          <Loader2 style={{ width: 40, height: 40, color: '#2563eb', animation: 'spin 1s linear infinite' }} />
          <p style={{ color: '#4b5563', fontWeight: 500, fontSize: '16px' }}>Chargement du cours...</p>
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
  const allDone = completedCount >= totalLessons && totalLessons > 0;

  // Sidebar style selon mobile/desktop
  const sidebarStyle = isDesktop
    ? S.sidebar
    : sidebarOpen ? S.sidebarMobileVisible : S.sidebarMobileHidden;

  return (
    <div style={S.root}>

      {/* Overlay mobile */}
      {!isDesktop && sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.4)', zIndex: 20 }}
        />
      )}

      {/* ── Sidebar ── */}
      <div style={sidebarStyle}>

        {/* Haut sidebar */}
        <div style={{ height: '56px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 16px', borderBottom: '1px solid #f3f4f6' }}>
          <Link
            href={`/formations/${formationId}`}
            style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#6b7280', fontSize: '14px', textDecoration: 'none' }}
          >
            <ArrowLeft size={16} />
            Retour
          </Link>
          {!isDesktop && (
            <button onClick={() => setSidebarOpen(false)} style={{ padding: '4px', background: 'none', border: 'none', cursor: 'pointer' }}>
              <X size={16} />
            </button>
          )}
        </div>

        {/* Titre + progression */}
        <div style={{ padding: '16px', borderBottom: '1px solid #f3f4f6', flexShrink: 0 }}>
          <p style={{ fontSize: '12px', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>
            Formation
          </p>
          <p style={{ fontSize: '13px', fontWeight: 600, color: '#1f2937', lineHeight: 1.4, marginBottom: '12px', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
            {formation.title}
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: '#6b7280' }}>
            <span>{completedCount}/{totalLessons} leçons</span>
            <div style={{ flex: 1, height: '6px', backgroundColor: '#e5e7eb', borderRadius: '3px', overflow: 'hidden' }}>
              <div style={{ height: '100%', width: `${progressPercent}%`, backgroundColor: '#2563eb', transition: 'width 0.5s', borderRadius: '3px' }} />
            </div>
            <span style={{ fontWeight: 700, color: '#2563eb' }}>{progressPercent}%</span>
          </div>
        </div>

        {/* Modules */}
        <div style={{ flex: 1, overflowY: 'auto' }}>
          {formation.modules.map((module, modIdx) => (
            <div key={module.id || modIdx} style={{ borderBottom: '1px solid #f3f4f6' }}>
              <button
                onClick={() => toggleModule(modIdx)}
                style={{ width: '100%', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: '12px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
              >
                <span style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: '#dbeafe', color: '#1d4ed8', fontSize: '11px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  {modIdx + 1}
                </span>
                <span style={{ flex: 1, fontSize: '13px', fontWeight: 500, color: '#1f2937', lineHeight: 1.3 }}>
                  {module.title}
                </span>
                {expandedModules.has(modIdx)
                  ? <ChevronUp size={14} color="#9ca3af" />
                  : <ChevronDown size={14} color="#9ca3af" />}
              </button>

              {expandedModules.has(modIdx) && (
                <div style={{ backgroundColor: '#f9fafb', paddingBottom: '4px' }}>
                  {(module.contents || []).map(c => {
                    const done = completedIds.includes(c.id);
                    const active = currentContent?.id === c.id;
                    return (
                      <button
                        key={c.id}
                        onClick={() => navigateTo(c.id)}
                        style={{
                          width: '100%', padding: '10px 16px',
                          display: 'flex', alignItems: 'center', gap: '12px',
                          background: active ? '#eff6ff' : 'none',
                          border: 'none',
                          borderLeft: active ? '3px solid #2563eb' : '3px solid transparent',
                          cursor: 'pointer', textAlign: 'left',
                        }}
                      >
                        {done
                          ? <CheckCircle size={14} color="#22c55e" style={{ flexShrink: 0 }} />
                          : <Circle size={14} color={active ? '#3b82f6' : '#d1d5db'} style={{ flexShrink: 0 }} />
                        }
                        <span style={{
                          fontSize: '13px', lineHeight: 1.3,
                          color: active ? '#1d4ed8' : done ? '#9ca3af' : '#374151',
                          fontWeight: active ? 600 : 400,
                          textDecoration: done ? 'line-through' : 'none',
                        }}>
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
      </div>

      {/* ── Zone principale ── */}
      <div style={S.contentArea}>

        {/* Top bar */}
        <div style={S.topBar}>
          {!isDesktop && (
            <button
              onClick={() => setSidebarOpen(true)}
              style={{ padding: '8px', background: 'none', border: 'none', cursor: 'pointer', borderRadius: '8px' }}
            >
              <Menu size={20} />
            </button>
          )}

          <div style={{ flex: 1, minWidth: 0 }}>
            <p style={{ fontSize: '14px', fontWeight: 600, color: '#374151', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              {currentContent?.title ?? formation.title}
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
            <div style={{ width: '112px', height: '8px', backgroundColor: '#e5e7eb', borderRadius: '4px', overflow: 'hidden' }}>
              <div style={{ height: '100%', width: `${progressPercent}%`, backgroundColor: '#2563eb', transition: 'width 0.5s' }} />
            </div>
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#2563eb', flexShrink: 0 }}>{progressPercent}%</span>
          </div>

          {allDone && formation.evaluation && (
            <Link
              href={`/evaluation/${formation.evaluation.id}?enrollmentId=${enrollment.id}&formationId=${formationId}`}
              style={{ padding: '6px 16px', backgroundColor: '#16a34a', color: 'white', borderRadius: '8px', fontSize: '13px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none', flexShrink: 0 }}
            >
              <Award size={15} />
              Quiz final
            </Link>
          )}
        </div>

        {/* Zone scrollable */}
        <div style={S.scrollArea}>
          {loadingContent ? (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '300px' }}>
              <Loader2 style={{ width: 32, height: 32, color: '#2563eb', animation: 'spin 1s linear infinite' }} />
            </div>
          ) : !currentContent ? (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '300px', color: '#9ca3af' }}>
              <div style={{ textAlign: 'center' }}>
                <BookOpen size={48} color="#d1d5db" style={{ display: 'block', margin: '0 auto 16px' }} />
                <p style={{ fontSize: '16px' }}>Sélectionnez une leçon dans le menu</p>
              </div>
            </div>
          ) : (
            <div style={S.contentWrapper}>

              {currentContent.module?.title && (
                <p style={{ fontSize: '13px', color: '#9ca3af', fontWeight: 500, marginBottom: '8px' }}>
                  {currentContent.module.title}
                </p>
              )}

              <h2 style={S.lessonTitle}>{currentContent.title}</h2>

              <div style={S.card}>
                {currentContent.type === 'TEXT' && (
                  <div style={S.bodyText}>
                    {currentContent.body || 'Contenu non disponible pour le moment.'}
                  </div>
                )}
                {currentContent.type === 'VIDEO' && currentContent.url && (
                  <div style={{ aspectRatio: '16/9', borderRadius: '12px', overflow: 'hidden', backgroundColor: 'black' }}>
                    <iframe src={currentContent.url} style={{ width: '100%', height: '100%' }} allowFullScreen title={currentContent.title} />
                  </div>
                )}
                {currentContent.type === 'VIDEO' && !currentContent.url && (
                  <p style={{ textAlign: 'center', padding: '64px 0', color: '#9ca3af', fontSize: '16px' }}>Vidéo non disponible.</p>
                )}
                {currentContent.type === 'PDF' && currentContent.url && (
                  <div>
                    <iframe src={currentContent.url} style={{ width: '100%', height: '600px', borderRadius: '12px', border: '1px solid #e5e7eb' }} title={currentContent.title} />
                    <a href={currentContent.url} target="_blank" rel="noopener noreferrer"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#2563eb', fontSize: '14px', marginTop: '12px', textDecoration: 'none' }}>
                      <FileText size={15} /> Ouvrir dans un nouvel onglet
                    </a>
                  </div>
                )}
              </div>

              {/* Navigation */}
              <div style={{ display: 'flex', gap: '16px', marginBottom: '40px' }}>
                <button
                  onClick={() => { if (currentIdx > 0) navigateTo(allContents[currentIdx - 1].id); }}
                  disabled={currentIdx <= 0}
                  style={{ padding: '14px 24px', border: '2px solid #e5e7eb', borderRadius: '12px', background: 'white', color: '#4b5563', fontWeight: 600, fontSize: '15px', cursor: currentIdx <= 0 ? 'not-allowed' : 'pointer', opacity: currentIdx <= 0 ? 0.4 : 1 }}
                >
                  ← Précédent
                </button>
                <button
                  onClick={markAsComplete}
                  style={{
                    flex: 1, padding: '14px', borderRadius: '12px', fontWeight: 700, fontSize: '15px', cursor: 'pointer', border: isCurrentDone ? '2px solid #bbf7d0' : 'none',
                    backgroundColor: isCurrentDone ? '#f0fdf4' : '#2563eb',
                    color: isCurrentDone ? '#15803d' : 'white',
                  }}
                >
                  {isCurrentDone
                    ? (isLastLesson ? '✓ Formation terminée' : '✓ Continuer →')
                    : (isLastLesson ? 'Terminer la formation' : 'Marquer comme terminé →')}
                </button>
                <button
                  onClick={() => { if (currentIdx < allContents.length - 1) navigateTo(allContents[currentIdx + 1].id); }}
                  disabled={currentIdx >= allContents.length - 1}
                  style={{ padding: '14px 24px', border: '2px solid #e5e7eb', borderRadius: '12px', background: 'white', color: '#4b5563', fontWeight: 600, fontSize: '15px', cursor: currentIdx >= allContents.length - 1 ? 'not-allowed' : 'pointer', opacity: currentIdx >= allContents.length - 1 ? 0.4 : 1 }}
                >
                  Suivant →
                </button>
              </div>

              {allDone && (
                <div style={{ padding: '32px', backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '16px', textAlign: 'center' }}>
                  <Award size={56} color="#22c55e" style={{ display: 'block', margin: '0 auto 16px' }} />
                  <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#166534', marginBottom: '8px' }}>Formation complétée !</h3>
                  <p style={{ fontSize: '16px', color: '#15803d', marginBottom: '24px' }}>Bravo ! Toutes les leçons sont terminées.</p>
                  {formation.evaluation && (
                    <Link
                      href={`/evaluation/${formation.evaluation.id}?enrollmentId=${enrollment.id}&formationId=${formationId}`}
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 32px', backgroundColor: '#16a34a', color: 'white', borderRadius: '12px', fontWeight: 700, fontSize: '16px', textDecoration: 'none' }}
                    >
                      <Award size={22} />
                      Passer l'évaluation finale
                    </Link>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Page wrapper ─────────────────────────────────────────────────────────────

export default function CoursPlayerPage() {
  return (
    <Suspense fallback={
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Loader2 className="w-10 h-10 text-blue-600 animate-spin" />
      </div>
    }>
      <CoursPlayer />
    </Suspense>
  );
}
