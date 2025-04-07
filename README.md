This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## le plan mon-blog/

├── pages
│ ├── \_app.js
│ ├── \_document.js
│ ├── index.js // Votre page d'accueil publique
│ └── blog
│ ├── [slug].js // Page d'affichage d'un article de blog
│ └── index.js // Liste des articles de blog (facultatif)
│ └── admin // Dossier pour l'administration
│ ├── index.js // Tableau de bord de l'administrateur
│ ├── create-post.js // Formulaire de création d'un nouvel article
│ ├── edit-post/[id].js // Formulaire d'édition d'un article existant
│ └── ... autres pages d'administration
├── components
│ ├── ... composants publics de votre site
│ └── admin // Composants spécifiques à l'administration (facultatif)
│ ├── ...
├── lib
│ ├── api.js // Fonctions pour interagir avec votre API backend
│ └── ... autres librairies
├── public
│ └── ... assets
└── ... autres fichiers de configuration

# TinyMCE (avec le wrapper React officiel)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
