import { create } from 'zustand';

interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (userData: User & { password: string }) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: false,
  login: async (email: string, password: string) => {
    set({ isLoading: true });
    try {
      // Simuler une connexion API
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const user = {
        id: '1',
        email,
        firstName: 'John',
        lastName: 'Doe',
      };
      set({ user, isAuthenticated: true, isLoading: false });
    } catch (error) {
      set({ isLoading: false });
      throw error;
    }
  },
  register: async (userData) => {
    set({ isLoading: true });
    try {
      // Simuler une inscription API
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const { password, ...user } = userData;
      set({ user, isAuthenticated: true, isLoading: false });
    } catch (error) {
      set({ isLoading: false });
      throw error;
    }
  },
  logout: () => {
    set({ user: null, isAuthenticated: false });
  },
}));
