import { create } from 'zustand';
import { persist } from 'zustand/middleware';

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
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  register: (userData: { firstName: string; lastName: string; email: string; phone?: string; password: string }) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
  checkAuth: () => void;
}

// Helper pour générer un ID unique
const generateId = () => Math.random().toString(36).substring(2) + Date.now().toString(36);

// Helper pour hacher le mot de passe (simple pour simulation)
const hashPassword = (password: string): string => {
  let hash = 0;
  for (let i = 0; i < password.length; i++) {
    const char = password.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return hash.toString(16);
};

// Helper pour vérifier le mot de passe
const verifyPassword = (password: string, hashed: string): boolean => {
  return hashPassword(password) === hashed;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,
      isLoading: false,

      login: async (email: string, password: string) => {
        set({ isLoading: true });
        
        // Simuler un délai réseau
        await new Promise((resolve) => setTimeout(resolve, 800));

        try {
          // Récupérer les utilisateurs depuis localStorage
          const usersJson = localStorage.getItem('wurami_users');
          const users = usersJson ? JSON.parse(usersJson) : [];

          // Chercher l'utilisateur par email
          const foundUser = users.find((u: any) => u.email === email);

          if (!foundUser) {
            set({ isLoading: false });
            return { success: false, error: 'Aucun compte trouvé avec cet email' };
          }

          // Vérifier le mot de passe
          if (!verifyPassword(password, foundUser.password)) {
            set({ isLoading: false });
            return { success: false, error: 'Mot de passe incorrect' };
          }

          // Connexion réussie - stocker la session
          const { password: _, ...userWithoutPassword } = foundUser;
          localStorage.setItem('wurami_current_user', JSON.stringify(userWithoutPassword));
          
          set({ 
            user: userWithoutPassword, 
            isAuthenticated: true, 
            isLoading: false 
          });
          
          return { success: true };
        } catch (error) {
          set({ isLoading: false });
          return { success: false, error: 'Une erreur est survenue' };
        }
      },

      register: async (userData: { firstName: string; lastName: string; email: string; phone?: string; password: string }) => {
        set({ isLoading: true });
        
        // Simuler un délai réseau
        await new Promise((resolve) => setTimeout(resolve, 800));

        try {
          // Récupérer les utilisateurs existants
          const usersJson = localStorage.getItem('wurami_users');
          const users = usersJson ? JSON.parse(usersJson) : [];

          // Vérifier si l'email existe déjà
          if (users.some((u: any) => u.email === userData.email)) {
            set({ isLoading: false });
            return { success: false, error: 'Cet email est déjà utilisé' };
          }

          // Créer le nouvel utilisateur
          const newUser = {
            id: generateId(),
            email: userData.email,
            firstName: userData.firstName,
            lastName: userData.lastName,
            phone: userData.phone || '',
            password: hashPassword(userData.password),
            createdAt: new Date().toISOString(),
          };

          // Ajouter à la liste
          users.push(newUser);
          localStorage.setItem('wurami_users', JSON.stringify(users));

          // Connecter automatiquement
          const { password: _, ...userWithoutPassword } = newUser;
          localStorage.setItem('wurami_current_user', JSON.stringify(userWithoutPassword));

          set({ 
            user: userWithoutPassword, 
            isAuthenticated: true, 
            isLoading: false 
          });

          return { success: true };
        } catch (error) {
          set({ isLoading: false });
          return { success: false, error: 'Une erreur est survenue lors de l\'inscription' };
        }
      },

      logout: () => {
        localStorage.removeItem('wurami_current_user');
        set({ user: null, isAuthenticated: false });
      },

      checkAuth: () => {
        const currentUserJson = localStorage.getItem('wurami_current_user');
        if (currentUserJson) {
          const user = JSON.parse(currentUserJson);
          set({ user, isAuthenticated: true });
        }
      },
    }),
    {
      name: 'wurami_auth',
      partialize: (state) => ({ 
        user: state.user, 
        isAuthenticated: state.isAuthenticated 
      }),
    }
  )
);
