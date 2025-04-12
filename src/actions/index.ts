import { defineAction } from "astro:actions";
import { z } from "astro:schema";
import type { NasaItem } from "@/type/NasaType.ts";

export const server = {
  search: defineAction({
    accept: "form",
    input: z.object({
      query: z.string().optional(),
    }),
    handler: async (input) => {
      const query = input.query;
      const response = query
        ? await fetch(`http://localhost:4321/mock/nasa-api/${query}`)
        : await fetch(`http://localhost:4321/mock/nasa-api/`);

      const data = (await response.json()) as NasaItem[];

      function sortResult() {
        return (a: NasaItem, b: NasaItem) =>
          a.data[0].nasa_id.localeCompare(b.data[0].nasa_id);
      }

      return data.sort(sortResult());
    },
  }),
};
