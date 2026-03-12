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

// ─── Types ────────────────────────────────────────────────────────────────────

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  sex: 'M' | 'F';
  communeId: string;
  email: string;
  role: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

export interface AuthResponse {
  user: User;
  accessToken: string;
  refreshToken: string;
  tokenType: string;
  expiresIn: string;
}

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

export interface PaginatedResponse<T> {
  data: T[];
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}

// ─── Auth ─────────────────────────────────────────────────────────────────────

export const authApi = {
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

  login: (email: string, password: string): Promise<AuthResponse> =>
    apiFetch('/auth/login', { method: 'POST', body: JSON.stringify({ email, password }) }),

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

// ─── Géographie ───────────────────────────────────────────────────────────────

export const geoApi = {
  getDepartments: (): Promise<PaginatedResponse<Department>> =>
    apiFetch('/departments?limit=20'),

  getCommunes: (): Promise<PaginatedResponse<Commune>> =>
    apiFetch('/communes?limit=100'),
};

// ─── Token helpers (exportés pour le store) ───────────────────────────────────

export { saveTokens, clearTokens, getAccessToken };
