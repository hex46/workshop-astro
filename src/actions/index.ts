import { defineAction } from "astro:actions";
import { z } from "astro:schema";
import type { NasaCollection, NasaItem } from "@/type/NasaType.ts";

export const server = {
  search: defineAction({
    accept: "form",
    input: z.object({
      query: z.string(),
    }),
    handler: async (input) => {
      const response = await fetch(
        `https://images-api.nasa.gov/search?q=${input.query}&page_size=5&media_type=image`,
      );
      const data = (await response.json()) as NasaCollection;

      function sortResult() {
        return (a: NasaItem, b: NasaItem) =>
          a.data[0].nasa_id.localeCompare(b.data[0].nasa_id);
      }

      return data.collection.items.sort(sortResult());
    },
  }),
};
