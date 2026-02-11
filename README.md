# Win Academy

**Win Academy** est une plateforme EdTech béninoise qui démocratise l'accès à l'éducation numérique pour les élèves des zones défavorisées.

##  Mission

Notre mission est de permettre aux élèves du Nord Bénin et des zones reculées de la capitale d'acquérir des compétences numériques essentielles, même avec une connexion internet limitée.

##  Caractéristiques principales

- **Optimisé pour faible connexion** : Fonctionne même avec un débit internet limité
- **Mobile-first** : Accessible principalement sur smartphone
- **Certifications reconnues** : Attestations avec QR code pour valider les compétences
- **Parcours structurés** : Modules progressifs avec évaluations

##  Public cible

- Élèves du Nord Bénin et zones rurales
- Populations des zones reculées de la capitale
- Jeunes souhaitant acquérir des compétences digitales professionnelles

##  Stack Technique

- **Framework:** Next.js 14 (React)
- **Langage:** TypeScript
- **Styling:** Tailwind CSS
- **Gestion d'état:** Zustand
- **Requêtes API:** TanStack Query
- **Icônes:** Lucide React

##  Installation

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

##  Structure du Projet

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
│   ├── PresentationSection.tsx
│   ├── HowItWorksSection.tsx
│   ├── StatsSection.tsx
│   ├── TestimonialsSection.tsx
│   ├── FAQSection.tsx
│   ├── PartnersSection.tsx
│   ├── CTASection.tsx
│   └── Footer.tsx
├── store/                  # Stores Zustand
│   └── authStore.ts
└── utils/                  # Utilitaires
```

##  Fonctionnalités

- [x] Page d'accueil avec Hero
- [x] Section "Pour qui" (cible)
- [x] Section Présentation (mission)
- [x] Section Fonctionnement
- [x] Section Formations
- [x] Section Statistiques
- [x] Section Témoignages
- [x] Section FAQ
- [x] Section Partenaires
- [x] Call To Action
- [x] Footer complet
- [x] Page connexion
- [x] Page inscription
- [ ] Page À propos détaillée
- [ ] Page formations avec catégories
- [ ] Authentification complète
- [ ] PWA avec mise en cache

##  Commandes

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

## ⚡ Performance

- Lazy loading des images
- Code splitting automatique
- Bundle optimisé
- PWA avec mise en cache
- Optimisé pour faible connexion

##  Licence

Nathan VOGLOSSOU
