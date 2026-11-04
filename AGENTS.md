# Kommit Frontend

Application frontend du projet Kommit, développée avec React, TypeScript, Tailwind CSS (v4), shadcn/ui et Vitest.

## Arborescence

```
src/
├── main.tsx          # point d'entrée : monte l'app dans le DOM. Rien d'autre.
├── App.tsx           # assemblage de l'app : providers et routes.
├── components/       # l'affichage. 2 sous-dossiers, pas un de plus.
│   ├── ui/           # les composants génériques, réutilisés par 2+ écrans.
│   └── pages/        # un dossier par écran, avec ses morceaux spécifiques.
├── logic/            # la logique métier. Ne connaît ni React, ni le DOM, ni le réseau.
├── lib/              # la couche infra : ce qui parle à l'extérieur.
│   └── api/          # le seul endroit qui connaît le réseau.
├── data/             # le contenu statique des écrans (textes, labels).
├── types/            # le contrat d'API partagé avec le backend.
└── assets/           # les images utilisées au runtime.
```
