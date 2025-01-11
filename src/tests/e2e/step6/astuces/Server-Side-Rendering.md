# Server Side Rendering

Par défaut, Astro effectue le rendu des pages au build time, mais il est possible de le faire côté serveur.
Pour cela, il faut ajouter une intégration. Dans cet atelier, nous utiliserons l'intégration NodeJS ([mais il en existe d'autres](https://docs.astro.build/fr/guides/on-demand-rendering/#adaptateurs-de-serveur)) ⬇️

```shell
npx astro add node
```

Cela devrait modifier le fichier `astro.config.mjs`.
Par défaut, l'intégralité du site sera pré-rendu et des pages HTML statiques seront donc générées. Pour changer cela, il y a plusieurs méthodes :

- Ajouter `export const prerender = false` au niveau page que l'on souhaite générer côté serveur.
- Activer le mode `server` qui va générer chaque page côté serveur par défaut.

Pour activer ce mode, nous devons modifier `astro.config.mjs` en y ajoutant la ligne suivante:

```js
// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  output: "server", // <-- celle ci 😊
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  adapter: node({
    mode: "standalone",
  }),
});
```

Ensuite, vous pouvez `build` le projet et le lancer via NodeJS via la commande suivante :

```shell
node ./dist/server/entry.mjs
```

En ajoutant un petit `console.log(...)` dans le `fronmatter` de votre page affichant l'image du jour, vous verrez que le serveur génère bien la page 😉.
