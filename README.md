# RG News (Démo Frontend)

Stack: **Next.js 14 (App Router) + TypeScript + Tailwind CSS**  
(Prêt pour intégrer Sanity plus tard)

## Démarrage

1. **Installer les dépendances**
```bash
npm install
```

2. **Lancer le serveur de dev**
```bash
npm run dev
```
Ouvrez http://localhost:3000

## Structure

- `app/` — pages, layout, styles globaux
- `components/` — NavBar, Footer, cartes d’articles, Section
- `lib/data.ts` — **données fictives** pour la démo (remplacées par Sanity ensuite)
- `tailwind.config.ts` — configuration Tailwind
- `next.config.mjs` — autorise les images distantes (Unsplash)

## À venir (back-office)
- Intégration **Sanity Studio** à `/studio`
- Schémas: `post`, `category`, `author`
- Revalidation ISR via webhook
