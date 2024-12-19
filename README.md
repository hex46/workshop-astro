# 🌌 Devenez un Astronaute : Découvrez le Framework Astro 🚀

Bienvenue à l'atelier **"Devenez un Astronaute : Découvrez le Framework Astro"** ! Cet atelier est conçu pour vous initier à l'univers d'[Astro](https://astro.build/), un framework moderne qui simplifie le développement de sites web performants.

En explorant les planètes du système solaire grâce à l'API de la NASA, vous apprendrez les bases d'Astro tout en créant un projet captivant. 🌍🪐🌠

---

## 🎯 Objectifs de l'atelier

- Découvrir les bases du framework **Astro** : structure, composants, et fichiers.
- Créer des pages statiques pour chaque planète du système solaire.
- Consommer une API externe (API de la NASA) pour récupérer des données dynamiques.
- Comprendre comment Astro génère des sites web ultra-rapides.

---

## 🛠️ Pré-requis

Avant de commencer, assurez-vous d'avoir les éléments suivants :

1. **Node.js** (version 16 ou supérieure) : [Télécharger ici](https://nodejs.org/).
2. **Un éditeur de code** (recommandé : [Visual Studio Code](https://code.visualstudio.com/)).
3. **Une clé API NASA** :
   - Créez un compte sur [NASA Open APIs](https://api.nasa.gov/).
   - Générez une clé API et gardez-la à portée de main.

---

## 🚀 Démarrage rapide

### Cloner le repo

```bash
git clone https://github.com/hex46/workshop-astro.git
cd workshop-astro
```

### Installer les dépendances

```bash
npm install
```

### Lancer le serveur

```bash
npm run dev
```

---

## 💬 Support et questions

Si vous avez des questions pendant ou après l'atelier, n'hésitez pas à demander ! 🚀

Happy coding! ✨

## FAQ

- Pourquoi override vite avec la version 6.0.2 dans `package.json` ?
  > Sans cette modification, il n'est pas possible de faire des tests de composants.
  > Plus d'[info ici](https://github.com/withastro/astro/issues/12662#issuecomment-2523630127)
