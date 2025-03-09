# Génération de pages dynamiques avec Astro

## Récupération de paramètres d'URL

Astro offre une manière très simple de créer des pages dynamiques en extrayant des paramètres directement de l'URL.

Pour récupérer un paramètre, utilisez la syntaxe `[...]` dans le nom du fichier `.astro`. Par exemple : `src/pages/[...id].astro`

Utilisation dans le composant :

```astro
---
import { Astro } from "astro";

const { id } = Astro.params;
---

<h1>Détails de l'article {id}</h1>
```

## Redirections

Astro permet également de gérer les redirections de manière simple et efficace :

```astro
---
import { Astro } from "astro";

Astro.redirect("/nouvelle-page");
---
```

Cela peut être très utile pour rediriger vers une 404 😉.
