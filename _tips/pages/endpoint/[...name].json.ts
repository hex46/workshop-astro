// src: https://docs.astro.build/en/guides/endpoints/#params-and-dynamic-routing

interface Planet {
  name: string;
  description: string;
}

const planets: Planet[] = [
  {
    name: "mercury",
    description: "",
  },
  {
    name: "venus",
    description: "",
  },
  {
    name: "earth",
    description: "",
  },
  {
    name: "mars",
    description: "",
  },
  {
    name: "jupiter",
    description: "",
  },
  {
    name: "saturn",
    description: "",
  },
  {
    name: "uranus",
    description: "",
  },
  {
    name: "neptune",
    description: "",
  },
];

export function getStaticPaths() {
  return planets.map((planet) => ({ params: { name: planet.name } }));
}

function getPlanet(name: string) {
  return planets.find((planet) => planet.name.toLowerCase() === name);
}

// @ts-ignore
export async function GET({ params }) {
  const name = params.name;
  const planet = getPlanet(name);

  if (!planet) {
    return new Response(null, {
      status: 404,
      statusText: "Not found",
    });
  }

  return new Response(JSON.stringify(planet), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
