# OVER_RATE_LIMIT

Si vous avez ce message qui s'affiche lors du retour de l'API, cela veut dire que la clef que vous utilisez a atteint le quota d'appels par heures ou journalier.

Pas de panique ! Astro permet de fournir des pages au format JSON. On va donc se servir de cette fonctionnalité pour mock l'endpoint APOD de la NASA. Pour cela, il vous suffit de copier le fichier `step5/mock.apod.json.ts` dans le dossier `pages` et d'interroger l'URL `http://localhost:<port>/apod.json`.
