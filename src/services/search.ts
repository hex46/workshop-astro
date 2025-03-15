import type { NasaCollection, NasaItem } from "@/type/NasaType.ts";

export async function findByNasaId(id: string): Promise<NasaItem | undefined> {
  const response = await fetch(
    `https://images-api.nasa.gov/search?nasa_id=${id}`,
  );
  const data = (await response.json()) as NasaCollection;
  return data.collection.items[0];
}
