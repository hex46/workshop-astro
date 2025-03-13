import type { NasaCollection, NasaItem } from "@/type/NasaType.ts";

export async function search(query?: string): Promise<NasaItem[]> {
  const response = await fetch(
    `https://images-api.nasa.gov/search?q=${query}&page_size=100&media_type=image`,
  );
  const data = (await response.json()) as NasaCollection;
  return data.collection.items;
}

export async function findByNasaId(id: string): Promise<NasaItem | undefined> {
  const response = await fetch(
    `https://images-api.nasa.gov/search?nasa_id=${id}`,
  );
  const data = (await response.json()) as NasaCollection;
  return data.collection.items[0];
}
