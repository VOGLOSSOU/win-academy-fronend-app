const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || 'https://win-academy-backend.onrender.com';

// ─── Helpers ──────────────────────────────────────────────────────────────────

function getAccessToken(): string | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('accessToken');
}

function getRefreshToken(): string | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('refreshToken');
}

function saveTokens(accessToken: string, refreshToken: string) {
  localStorage.setItem('accessToken', accessToken);
  localStorage.setItem('refreshToken', refreshToken);
}

function clearTokens() {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
}

async function apiFetch<T>(
  endpoint: string,
  options: RequestInit = {},
  authenticated = false
): Promise<T> {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(options.headers as Record<string, string>),
  };

  if (authenticated) {
    const token = getAccessToken();
    if (token) headers['Authorization'] = `Bearer ${token}`;
  }

  const res = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  const data = await res.json();

  if (!res.ok) {
    throw new ApiError(res.status, data?.message || 'Une erreur est survenue');
  }

  return data as T;
}

export class ApiError extends Error {
  constructor(public status: number, message: string) {
    super(message);
    this.name = 'ApiError';
  }
}

// ─── Types ───────────────────────────────────────────────────────────────────-

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  dateOfBirth?: string;
  sex?: 'M' | 'F';
  email: string;
  role: string;
  status: string;
  createdAt: string;
  updatedAt?: string;
}

export interface AuthResponse {
  user: User;
  accessToken: string;
  refreshToken?: string;
  tokenType?: string;
  expiresIn?: string;
}

// ─── Catégories ───────────────────────────────────────────────────────────────

export interface Category {
  id: string;
  name: string;
  description?: string;
  image?: string | null;
  ageMin: number;
  ageMax: number;
  createdAt: string;
  formations?: Formation[];
}

export interface PaginatedResponse<T> {
  data: T[];
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}

export const categoriesApi = {
  getAll: (page = 1, limit = 20): Promise<PaginatedResponse<Category>> =>
    apiFetch(`/categories?page=${page}&limit=${limit}`),

  getById: (id: string): Promise<Category> =>
    apiFetch(`/categories/${id}`),
};

// ─── Formations ───────────────────────────────────────────────────────────────

export interface Formation {
  id: string;
  title: string;
  shortDescription?: string;
  fullDescription?: string;
  level: 'DEBUTANT' | 'INTERMEDIAIRE' | 'AVANCE';
  duration: number;
  price: number;
  image?: string | null;
  categoryId: string;
  createdAt: string;
  category?: Category;
  modules?: Module[];
  evaluation?: Evaluation;
  _count?: { enrollments: number };
}

export interface FormationDetail {
  id: string;
  title: string;
  shortDescription?: string;
  fullDescription?: string;
  level: 'DEBUTANT' | 'INTERMEDIAIRE' | 'AVANCE';
  duration: number;
  price: number;
  image?: string | null;
  category: { id: string; name: string };
  modules: Module[];
  evaluation: Evaluation;
  // Optional/Computed fields for UI
  students?: number;
  rating?: number;
  isFree?: boolean;
  pdfUrl?: string;
  objectives?: string[];
  skills?: string[];
  features?: string[];
  hasCertificate?: boolean;
  _count?: { enrollments: number };
}

export const formationsApi = {
  getAll: (page = 1, limit = 20): Promise<PaginatedResponse<Formation>> =>
    apiFetch(`/formations?page=${page}&limit=${limit}`),

  getById: (id: string): Promise<FormationDetail> =>
    apiFetch(`/formations/${id}`),

  getModules: (id: string): Promise<Module[]> =>
    apiFetch(`/formations/${id}/modules`),
};

// ─── Modules ─────────────────────────────────────────────────────────────────

export interface Module {
  id: string;
  title: string;
  description?: string;
  order: number;
  formationId: string;
  createdAt: string;
  contents?: Content[];
  formation?: {
    id: string;
    title: string;
    level: string;
    price: number;
  };
}

export const modulesApi = {
  getById: (id: string): Promise<Module> =>
    apiFetch(`/modules/${id}`),
};

// ─── Contenus ───────────────────────────────────────────────────────────────

export interface Content {
  id: string;
  type: 'TEXT' | 'VIDEO' | 'PDF';
  title: string;
  url?: string;
  body?: string;
  order: number;
  moduleId: string;
  createdAt: string;
  module?: {
    id: string;
    title: string;
    order: number;
    formationId: string;
  };
}

export const contentsApi = {
  getById: (id: string): Promise<Content> =>
    apiFetch(`/contents/${id}`, {}, true),
};

// ─── Inscriptions (Enrollments) ────────────────────────────────────────────

export interface Enrollment {
  id: string;
  userId: string;
  formationId: string;
  progressPercentage: number;
  status: 'IN_PROGRESS' | 'COMPLETED';
  enrolledAt: string;
  user?: User;
  formation?: Formation;
}

export const enrollmentsApi = {
  create: (formationId: string): Promise<Enrollment> =>
    apiFetch('/enrollments', {
      method: 'POST',
      body: JSON.stringify({ formationId }),
    }, true),

  getMine: (): Promise<Enrollment[]> =>
    apiFetch('/enrollments/mine', {}, true),

  getById: (id: string): Promise<Enrollment> =>
    apiFetch(`/enrollments/${id}`, {}, true),

  updateProgress: (id: string, progressPercentage: number): Promise<Enrollment> =>
    apiFetch(`/enrollments/${id}/progress`, {
      method: 'PATCH',
      body: JSON.stringify({ progressPercentage }),
    }, true),

  delete: (id: string): Promise<{ message: string }> =>
    apiFetch(`/enrollments/${id}`, { method: 'DELETE' }, true),
};

// ─── Évaluations ─────────────────────────────────────────────────────────────

export interface Question {
  id: string;
  questionText: string;
  answers: {
    id: string;
    answerText: string;
  }[];
}

export interface Evaluation {
  id: string;
  formationId: string;
  passingScore: number;
  maxAttempts: number;
  timeLimit: number;
  formation?: {
    id: string;
    title: string;
    level: string;
    price: number;
  };
  questions?: Question[];
}

export const evaluationsApi = {
  getById: (id: string): Promise<Evaluation> =>
    apiFetch(`/evaluations/${id}`, {}, true),
};

// ─── Tentatives (Attempts) ────────────────────────────────────────────────

export interface Attempt {
  id: string;
  userId: string;
  evaluationId: string;
  score: number;
  passed: boolean;
  attemptNumber: number;
  createdAt: string;
  evaluation?: Evaluation;
  user?: User;
}

export interface AttemptSubmit {
  evaluationId: string;
  answers: {
    questionId: string;
    answerId: string;
  }[];
}

export const attemptsApi = {
  submit: (data: AttemptSubmit): Promise<Attempt> =>
    apiFetch('/attempts', {
      method: 'POST',
      body: JSON.stringify(data),
    }, true),

  getById: (id: string): Promise<Attempt> =>
    apiFetch(`/attempts/${id}`, {}, true),
};

// ─── Certificats ───────────────────────────────────────────────────────────

export interface Certificate {
  id: string;
  userId: string;
  formationId: string;
  uniqueCode: string;
  issuedAt: string;
  qrCodeUrl?: string | null;
  user?: User;
  formation?: {
    id: string;
    title: string;
    level: string;
    price: number;
  };
}

export const certificatesApi = {
  getMine: (): Promise<Certificate[]> =>
    apiFetch('/certificates/mine', {}, true),

  verify: (uniqueCode: string): Promise<Certificate> =>
    apiFetch(`/certificates/verify/${uniqueCode}`),

  getById: (id: string): Promise<Certificate> =>
    apiFetch(`/certificates/${id}`, {}, true),
};

// ─── Dashboard ─────────────────────────────────────────────────────────────

export interface DashboardData {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  dateOfBirth?: string;
  sex?: string;
  role: string;
  status: string;
  createdAt: string;
  enrollments: Enrollment[];
  certificates: Certificate[];
}

export const dashboardApi = {
  getData: (): Promise<DashboardData> =>
    apiFetch('/auth/dashboard', {}, true),
};

// ─── Auth ─────────────────────────────────────────────────────────────────────

export const authApi = {
  login: (email: string, password: string): Promise<AuthResponse> =>
    apiFetch('/auth/login', { method: 'POST', body: JSON.stringify({ email, password }) }),

  register: (payload: {
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    sex: 'M' | 'F';
    communeId: string;
    email: string;
    password: string;
  }): Promise<AuthResponse> =>
    apiFetch('/auth/register', { method: 'POST', body: JSON.stringify(payload) }),

  me: (): Promise<User> =>
    apiFetch('/auth/me', { method: 'GET' }, true),

  refresh: (): Promise<{ accessToken: string; refreshToken: string; tokenType: string; expiresIn: string }> => {
    const token = getRefreshToken();
    return apiFetch('/auth/refresh', {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}` },
    });
  },
};

// ─── Géographie (legacy - kept for backward compatibility) ───────────────

export interface Department {
  id: string;
  name: string;
  code: string;
  createdAt: string;
  updatedAt: string;
  communes: Commune[];
}

export interface Commune {
  id: string;
  name: string;
  departmentId: string;
  createdAt: string;
  updatedAt: string;
}

export const geoApi = {
  getDepartments: (): Promise<PaginatedResponse<Department>> =>
    apiFetch('/departments?limit=20'),

  getCommunes: (): Promise<PaginatedResponse<Commune>> =>
    apiFetch('/communes?limit=100'),
};

// ─── Token helpers (exportés pour le store) ───────────────────────────────────

export { saveTokens, clearTokens, getAccessToken };
