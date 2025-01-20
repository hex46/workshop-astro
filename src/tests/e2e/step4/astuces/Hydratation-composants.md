# Hydratation des composants

⚠️ Cette section concerne uniquement les composants développés avec des bibliothèques ou frameworks comme React, Vue, ou Svelte. Les composants Astro, quant à eux, ne peuvent être utilisés **que pour générer du HTML statique**.

Un composant peut être rendu interactif (ou hydraté) en utilisant l'une des directives disponibles : `client:*`. La liste complète des directives client est disponible [ici](https://docs.astro.build/en/reference/directives-reference/#directives-client).

Pour cet atelier, nous utiliserons principalement la directive `client:load`.

### Exemple d'utilisation

Voici un exemple de composant hydraté :

```astro
---
import InteractiveButton from "../components/InteractiveButton.jsx";
---

<InteractiveButton client:load />
```

⚠️ Si le composant utilise des props qui sont des fonctions, il est important de noter que celles-ci ne seront exécutées que côté serveur.
