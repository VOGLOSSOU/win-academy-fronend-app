# Win Academy

Plateforme de formation en ligne pour développer vos compétences et faire évoluer votre carrière.

## Stack Technique

- **Framework:** Next.js 14 (React)
- **Langage:** TypeScript
- **Styling:** Tailwind CSS
- **Gestion d'état:** Zustand
- **Requêtes API:** TanStack Query
- **Icônes:** Lucide React

## Installation

1. Cloner le projet
2. Installer les dépendances :
```bash
npm install
```

3. Créer un fichier `.env.local` :
```env
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

4. Lancer le serveur de développement :
```bash
npm run dev
```

## Structure du Projet

```
src/
├── app/                    # Pages Next.js (App Router)
│   ├── page.tsx           # Page d'accueil
│   ├── connexion/         # Page de connexion
│   ├── inscription/       # Page d'inscription
│   ├── formations/        # Page des formations
│   └── a-propos/          # Page À propos
├── components/             # Composants React réutilisables
│   ├── Navigation.tsx
│   ├── Hero.tsx
│   ├── CoursesSection.tsx
│   ├── TargetSection.tsx
│   ├── CTASection.tsx
│   └── Footer.tsx
├── store/                  # Stores Zustand
│   └── authStore.ts
└── utils/                  # Utilitaires
```

## Fonctionnalités

- [x] Page d'accueil avec Hero
- [x] Section formations
- [x] Section "Pour qui"
- [x] Call To Action
- [x] Footer complet
- [x] Page connexion
- [x] Page inscription
- [ ] Page À propos détaillée
- [ ] Page formations avec catégories
- [ ] Authentification complète
- [ ] PWA

## Commandes

```bash
# Développement
npm run dev

# Build production
npm run build

# Linting
npm run lint

# Démarrer en production
npm start
```

## Performance

- Lazy loading des images
- Code splitting automatique
- Bundle optimisé
- PWA avec mise en cache
- Optimisé pour faible connexion

## Licence

Nathan VOGLOSSOU
