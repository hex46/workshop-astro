# Action

Les actions dans Astro sont des fonctions qui peuvent être exécutées côté serveur ou côté client pour gérer des
événements, comme les soumissions de formulaires, les appels API, etc.

## Exemple de Code

Voici un exemple simple pour illustrer comment utiliser les actions dans Astro. Nous allons créer un formulaire de
contact qui, lorsqu'il est soumis, envoie les données à une action côté serveur.

### Creation de l'action

src/actions/index.ts

```ts
import { defineAction, ActionError } from 'astro:actions';
import { z } from 'astro:schema';

export const server = {
  createUser: defineAction({
    input: z.object({
      firstname: z.string(),
      lastname: z.string()
    }),
    handler: async (input) => {
      const response = await fetch('http://localhost:8080/users', {
        method: 'POST', headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(input)
      })
      if (!response.ok) {
        // SI VOUS VOULEZ RETOURNER DES ERREURS, UTILISER LA METHODE ActionError
        throw new ActionError({
          code: "ERREUR",
          message: "Une erreur inconnue c'est produite.",
        });
        ;
      }
      const data = await response.json();
      return { id: data.id, firstname: data.firstname, lastname: data.lastname }
    }
  })
}
```

### Utiliser l'action au niveau du formulaire

src/page/createUser.astro

```html
---
import { actions } from 'astro:actions';
---

<form method="POST" action={actions.createUser}>
  <input type="text" name="firstname" />
  <input type="text" name="lastname" />
  <button type="submit">Submit</button>
</form>
```

### Utiliser le resultat de l'action

src/page/createUser.astro

```html
---
import { actions } from 'astro:actions';

const result = Astro.getActionResult(actions.createUser);
if (result && !result.error) {
return Astro.redirect(`/505`);
}
---

<form method="POST" action={actions.createUser}>
  <input type="text" name="firstname" />
  <input type="text" name="lastname" />
  <button type="submit">Submit</button>
</form>
{result && !result.error && (
<p class="success">Added {result.data.firstname}</p>
)}

```

[Plus d'information ici](https://docs.astro.build/en/guides/actions/#_top).