import { z, reference, defineCollection } from "astro:content";

const planets = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    planet: z.string(),
    image: z.string(),
    created: z.date(),
    sortOrder: z.number(),
    source: z.string().url(),
    isDraft: z.boolean().optional(),
  }),
});

export const collections = {
  planets: planets,
};
