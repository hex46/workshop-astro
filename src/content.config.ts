import { z, defineCollection } from "astro:content";
import { glob } from "astro/loaders";

const planets = defineCollection({
  loader: glob({
    pattern: ["*.md", "!pluto.md"],
    base: "./src/content/planets",
  }),
  schema: z.object({
    title: z.string(),
    planet: z.string(),
  }),
});

export const collections = {
  planets: planets,
};
