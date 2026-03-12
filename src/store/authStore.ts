import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { authApi, saveTokens, clearTokens, ApiError } from '@/lib/api';
import type { User } from '@/lib/api';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  register: (userData: {
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    sex: 'M' | 'F';
    communeId: string;
    email: string;
    password: string;
  }) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
  checkAuth: () => Promise<void>;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      isLoading: false,

      login: async (email, password) => {
        set({ isLoading: true });
        try {
          const data = await authApi.login(email, password);
          saveTokens(data.accessToken, data.refreshToken);
          set({ user: data.user, isAuthenticated: true, isLoading: false });
          return { success: true };
        } catch (err) {
          set({ isLoading: false });
          const message =
            err instanceof ApiError ? err.message : 'Une erreur est survenue';
          return { success: false, error: message };
        }
      },

      register: async (userData) => {
        set({ isLoading: true });
        try {
          const data = await authApi.register(userData);
          saveTokens(data.accessToken, data.refreshToken);
          set({ user: data.user, isAuthenticated: true, isLoading: false });
          return { success: true };
        } catch (err) {
          set({ isLoading: false });
          const message =
            err instanceof ApiError ? err.message : 'Une erreur est survenue';
          return { success: false, error: message };
        }
      },

      logout: () => {
        clearTokens();
        set({ user: null, isAuthenticated: false });
      },

      checkAuth: async () => {
        try {
          const user = await authApi.me();
          set({ user, isAuthenticated: true });
        } catch {
          clearTokens();
          set({ user: null, isAuthenticated: false });
        }
      },
    }),
    {
      name: 'wurami_auth',
      partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);
