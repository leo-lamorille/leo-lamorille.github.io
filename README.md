# Portfolio — Léo Lamorille

Portfolio personnel d'ingénieur fullstack, construit avec [Astro](https://astro.build).
Site statique, mobile first, sans framework JavaScript côté client.

🔗 **En ligne :** https://leo-lamorille.github.io

---

## Aperçu

- **Accueil** : présentation, stack, expertise, parcours, passions et contact.
- **Projets perso** (`/projects`) : projets personnels détaillés, avec photos agrandissables
  (premier projet : une suite de plugins audio en C pour Ableton Live).

### Points techniques

- **Astro 7**, rendu 100 % statique, déployé sur GitHub Pages.
- **CSS natif**, sans framework : design tokens en variables CSS, mise en page **mobile first**
  (media queries en `min-width` uniquement).
- **Animations au scroll sans JavaScript** grâce aux *scroll-driven animations*
  (`animation-timeline: view()` / `scroll()`) : titres qui se remplissent de couleur,
  parallaxe, barre de progression de lecture.
- **Amélioration progressive** : sans support navigateur, sans JavaScript ou avec
  `prefers-reduced-motion`, le site reste complet et lisible.
- **Images optimisées** via `astro:assets` (WebP, plusieurs tailles, chargement différé).
- **Accessibilité** : navigation au clavier, focus visibles, cibles tactiles de 44 px minimum,
  libellés ARIA, contrastes vérifiés, visionneuse d'images en `<dialog>` natif.
- **Contenu séparé du code** : tout le texte se modifie dans `src/data/`, sans toucher aux composants.

---

## Structure du dépôt

```
.
├── .github/workflows/deploy.yml   # Déploiement automatique sur GitHub Pages
└── portfolio/                     # Projet Astro
    ├── public/                    # Fichiers servis tels quels (cv.pdf, favicon.svg)
    ├── src/
    │   ├── assets/                # Images optimisées par Astro
    │   ├── components/
    │   │   ├── projects/          # Composants de la page Projets
    │   │   └── ui/                # Briques réutilisables (Button, SectionHeading, Lightbox)
    │   ├── data/
    │   │   ├── site.ts            # Contenu de l'accueil (infos, stack, expertise, passions…)
    │   │   └── projects.ts        # Projets perso
    │   ├── layouts/BaseLayout.astro
    │   ├── pages/
    │   │   ├── index.astro        # Accueil
    │   │   └── projects/index.astro
    │   └── styles/global.css      # Tokens, base, animations partagées
    ├── astro.config.mjs
    ├── package.json
    └── tsconfig.json
```

---

## Démarrer en local

**Prérequis :** Node.js 22.23 ou plus récent.

```bash
cd portfolio
npm install
npm run dev
```

Le site est disponible sur http://localhost:4321.

| Commande          | Action                                          |
| ----------------- | ----------------------------------------------- |
| `npm run dev`     | Serveur de développement avec rechargement auto |
| `npm run build`   | Compile le site dans `portfolio/dist/`          |
| `npm run preview` | Sert le build en local pour le vérifier         |

---

## Modifier le contenu

Tout le texte du site se trouve dans **`src/data/`** : pas besoin d'ouvrir les composants.

| Fichier       | Contenu                                                                                     |
| ------------- | ------------------------------------------------------------------------------------------- |
| `site.ts`     | Nom, e-mail, liens, menu, stack, cartes d'expertise, « À propos », passions, contact       |
| `projects.ts` | Projets perso : description, technos, liens, éléments et photos                             |

### Ajouter un projet perso

1. Placer les photos dans `src/assets/projects/<nom-du-projet>/`.
2. Les importer en haut de `src/data/projects.ts`.
3. Ajouter un objet au tableau `projects` :

```ts
{
    slug: "mon-projet",                 // ancre : /projects#mon-projet
    title: "Mon projet",
    kicker: "Side project · 2026",
    description: ["Premier paragraphe…", "Second paragraphe…"],
    tags: ["TypeScript", "Astro"],
    links: [{ label: "Voir le code sur GitHub", href: "https://github.com/…" }],
    images: [{ src: maPhoto, alt: "Description de la photo" }],
    // ou des éléments détaillés, chacun avec ses photos :
    // items: [{ name, kind, tagline, description, features, images }],
    // itemsLabel: "modules",
}
```

Avec plusieurs photos, la première s'affiche en grand et les suivantes en vignettes.
Toutes s'ouvrent en grand au clic.

### Remplacer un visuel de la section « Passions » par une photo

Voir le commentaire au-dessus du bloc `passions` dans `site.ts` : importer l'image,
puis ajouter `image` et `imageAlt` à l'élément concerné.

---

## Design

| Rôle        | Couleur   |
| ----------- | --------- |
| Fond        | `#0A0F0D` |
| Surface     | `#101815` |
| Texte       | `#E6F2EC` |
| Secondaire  | `#93AA9F` |
| Accent      | `#3DDC97` |
| Accent 2    | `#F5B83D` |

Palette « Terminal Mint », définie dans `src/styles/global.css` (variables `--color-*`).
Changer ces variables suffit à retoucher toute la charte.

**Typographies :** Space Grotesk (titres), Inter (texte), JetBrains Mono (touches « code »).

**Points de rupture :** 640 px, 768 px, 1024 px (documentés en tête de `global.css`).

---

## Déploiement

Le site est déployé automatiquement sur **GitHub Pages** à chaque push sur `main`,
via [`withastro/action`](https://github.com/withastro/action) (`.github/workflows/deploy.yml`).

Configuration requise :

- Dans le dépôt GitHub : **Settings → Pages → Source : GitHub Actions**.
- Dans `portfolio/astro.config.mjs` : `site` pointe vers l'URL du site.

Le suivi des déploiements se fait dans l'onglet **Actions** du dépôt.

---

## Auteur

**Léo Lamorille** — Ingénieur fullstack, Lille

- GitHub : [@leo-lamorille](https://github.com/leo-lamorille)
- LinkedIn : [leo-lamorille](https://www.linkedin.com/in/leo-lamorille/)
- E-mail : [lamorilleleo@gmail.com](mailto:lamorilleleo@gmail.com)
