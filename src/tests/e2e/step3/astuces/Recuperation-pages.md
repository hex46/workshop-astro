# Récupération des pages

Astro permet de récupérer les pages en utilisant l'outil de Vite : `import.meta.glob()`.

### Exemple d'utilisation

Voici un exemple pratique :

```typescript
const matches = import.meta.glob("../pages/post/*.md", { eager: true });
const posts = Object.values(matches);
```

Plus d'info ici : https://docs.astro.build/en/guides/imports/#importmetaglob
