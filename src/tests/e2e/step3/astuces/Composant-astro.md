# Composant Astro

Comme pour des bibliothèques ou frameworks comme React, Vue ou Svelte, il est possible de créer des composants Astro.

Voici un exemple de composant :

```astro
---
// Usage: <GreetingHeadline greeting="Howdy" name="Partner" />
const { greeting, name } = Astro.props;
---

<h2>{greeting}, {name}!</h2>
```

Et un exemple d'utilisation :

```astro
---
import GreetingHeadline from "./GreetingHeadline.astro";
const name = "Astro";
---

<h1>Greeting Card</h1>
<GreetingHeadline greeting="Hi" name={name} />
<p>I hope you have a wonderful day!</p>
```

`const { greeting, name } = Astro.props;` permet de définir et récupérer les props (ou données en entrée) du composant.

## Boucles

Il est possible de faire des boucles dans un composant pour générer plusieurs éléments du DOM. Voici un exemple :

```jsx
<ul>
  {myFavoritePokemon.map((data) => (
    <li>{data.name}</li>
  ))}
</ul>
```

## Syntaxe et documentation

Plus d'info ici : https://docs.astro.build/en/basics/astro-components/
