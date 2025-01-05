# Hydratation des composants

⚠️ Cette partie ne concerne que les composants qui sont développés avec des bibliothèques ou frameworks (React, Vue, Svelte, etc.). Les composants Astro ne peuvent être utilisés **que générer du HTML**.

Un composant peut être rendu intéractif (ou hydraté), en utilisant une des directives disponibles : `client:*`. La liste complète des directives clients se trouve [ici](https://docs.astro.build/en/reference/directives-reference/#directives-client).

Pour cet atelier, on pourra se contenter de `client:load`.

Voici un exemple :

```astro
---
import InteractiveButton from "../components/InteractiveButton.jsx";
---

<InteractiveButton client:load />
```

⚠️ Dans le cas où le composant utilise des `props` qui sont des fonctions, il faut noter que celles-ci ne seront utiliser que côté serveur.
