# Astronomy picture of the day (APOD)

La NASA propose un endpoint qui retourne l'image du jour avec quelques éléments en plus.
Voici un exemple :

```json
{
  "date": "2025-01-05",
  "explanation": "Have you ever seen a rocket launch -- from space?  A close inspection of the featured time-lapse video will reveal a rocket rising to Earth orbit as seen from the International Space Station (ISS).  The Russian Soyuz-FG rocket was launched in November 2018 from the Baikonur Cosmodrome in Kazakhstan, carrying a Progress MS-10 (also 71P) module to bring needed supplies to the ISS.  Highlights in the 90-second video (condensing about 15-minutes) include city lights and clouds visible on the Earth on the lower left, blue and gold bands of atmospheric airglow running diagonally across the center, and distant stars on the upper right that set behind the Earth. A lower stage can be seen falling back to Earth as the robotic supply ship fires its thrusters and begins to close on the ISS, a space laboratory that celebrated its 25th anniversary in 2023. Astronauts who live aboard the Earth-orbiting ISS conduct, among more practical duties, numerous science experiments that expand human knowledge and enable future commercial industry in low Earth orbit.",
  "media_type": "video",
  "service_version": "v1",
  "title": "Rocket Launch as Seen from the International Space Station",
  "url": "https://www.youtube.com/embed/B1R3dTdcpSU?rel=0"
}
```

Pour récupérer ces informations, il faut interroger 'https://api.nasa.gov/planetary/apod?api_key=XXXX' en ajoutant une clef d'API. Concernant cette dernière, il est possible d'utiliser une clef de démonstration, mais attention au flood 😉 car la NASA impose certaines limites :

> Hourly Limit: 30 requests per IP address per hour \

    Daily Limit: 50 requests per IP address per day

Vous pouvez visualiser l'image du jour via [ce lien](https://apod.nasa.gov/apod/) et la documentation de l'API se trouve [ici](https://api.nasa.gov/).

## Type d'image retournée par APOD

⚠️ Attention : cet endpoint peut retourner une vidéo à la place d'une image (c'est le cas de l'exemple ci-dessous datant du 5 janvier 2025). Il faut donc penser à gérer ce cas ! Voici un morceau de code permettant d'afficher une Iframe avec la vidéo :

```html
<iframe
  width="420"
  height="315"
  src="https://www.youtube.com/embed/B1R3dTdcpSU?rel=0"
>
</iframe>
```

Et voici un exemple pour gérer des conditions dans un composant Astro :

```astro
---
const visible = true;
---

{visible && <p>Show me!</p>}

{visible ? <p>Show me!</p> : <p>Else show me!</p>}
```

[Plus d'info sur la syntaxe ici](https://docs.astro.build/en/reference/astro-syntax/#dynamic-html).
