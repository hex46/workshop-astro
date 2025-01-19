# OVER_RATE_LIMIT

Si ce message s'affiche lors d'une requête à l'API, cela signifie que la clé API que vous utilisez a atteint son quota d'appels (horaire ou journalier). Pas de panique ! Astro permet de fournir des pages au format JSON. Nous allons utiliser cette fonctionnalité pour simuler l'endpoint APOD de la NASA.

### Étapes pour simuler l'API

1. Copiez le fichier `step5/mock.apod.json.ts` dans le dossier `pages`.
2. Interrogez l'URL suivante depuis votre navigateur ou outil préféré : `http://localhost:<port>/apod.json` (Remplacez `<port>` par le port utilisé par votre serveur local.)

Cela permettra de continuer à travailler sans dépendre directement de l'API.
