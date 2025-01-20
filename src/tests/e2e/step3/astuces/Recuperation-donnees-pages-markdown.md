# Récupération des données d'une page Markdown

L'API `import.meta.glob()` permet de récupérer chaque page à partir d'un pattern. Les pages retournées contiennent différentes données comme le `glob`, le `slug` ou encore l'URL mais aussi les données présentes dans le frontmatter.

Par exemple, pour le markdown suivant :

```markdown
---
layout: "@/layouts/Page.astro"
title: "Hello, Mercury!"
planet: "Mercury"
---

## Hello, Mercury!

![Hello, Mercury!](../../assets/nasa/mercury.jpg)
Hello, Mercury!

[Source](https://images.nasa.gov/details/PIA12262)
```

Il est possible de récupérer ce qui ce trouve entre les `---` en utilisant l'API suivante : `page.frontmatter.title`.

⚠️ Attention : il n'y a pas de vérification des propriétés présentes dans le frontmatter. Si `title` n'est pas présent, alors un élément vide sera retourné à la place. Pour éviter cela, il faut utiliser les [content collections](https://docs.astro.build/en/guides/content-collections/) (qui seront juste citées dans ce workshop).
