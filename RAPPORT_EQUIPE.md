# WIN Academy — Bilan général du projet

## Le projet

**WIN Academy** est la plateforme e-learning de **Wurami Innovative Hub**, une organisation béninoise dédiée à la formation digitale. La plateforme cible les jeunes du Bénin, y compris les zones rurales et reculées, avec une expérience optimisée pour les faibles connexions et les appareils mobiles. Elle est déployée en production sur Hostinger sous forme de site statique (Next.js 14).

---

## Ce qui a été réalisé

**Authentification & comptes** — Inscription avec profil complet (nom, département/commune au Bénin), connexion sécurisée avec JWT, tableau de bord personnel.

**Catalogue de formations** — Liste complète des formations avec recherche et filtres par catégorie. Chaque formation dispose d'une page détaillée (description, niveau, durée, modules).

**Lecteur de cours** — Accès au contenu après inscription : modules dépliables, leçons en texte, vidéo ou PDF, progression sauvegardée automatiquement.

**Certifications** — À la fin d'une formation, l'apprenant reçoit un certificat avec un code de vérification unique consultable en ligne.

**Ressources gratuites** — Section publique avec des PDFs téléchargeables (anglais, informatique, communication).

**Page Cyber Incubator 229** — Page dédiée au programme phare de cybersécurité de Wurami, conçue dans le cadre de la candidature OIF : présentation du programme, contexte des cybermenaces en Afrique, 3 piliers, résultats visés, appel à partenariat. Cette page est également la page d'accueil du site.

**Infrastructure & déploiement** — Build statique (`output: export`) compatible Hostinger, routes dynamiques avec pré-génération, pipeline de déploiement via dossier `out/`.
