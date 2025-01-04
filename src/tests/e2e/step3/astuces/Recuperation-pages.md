# Récupération des pages

Il est possible de récupérer les pages via l'outil de Vite `import.meta.glob()`.
Voici un exemple :

```typescript
const matches = import.meta.glob("../pages/post/*.md", { eager: true });
const posts = Object.values(matches);
```

Plus d'info ici : https://docs.astro.build/en/guides/imports/#importmetaglob
