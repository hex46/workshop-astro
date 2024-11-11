import { planets } from "@/mock/data/planets.ts";
import { stars } from "@/mock/data/stars.ts";
import type { NasaImage } from "@/mock/types.ts";

export const prerender = false;

const nasaImages: NasaImage[] = [...planets, ...stars];

function keywordFilter(query: string) {
  return (image) =>
    image.data.some((dataItem) =>
      dataItem.keywords?.some((keyword) =>
        keyword.toLowerCase().includes(query),
      ),
    );
}

export async function search(query = undefined): Promise<NasaImage[]> {
  return query === undefined
    ? nasaImages
    : nasaImages.filter(keywordFilter(query));
}

export async function findByNasaId(id: string): Promise<NasaImage | undefined> {
  return nasaImages.find((image) =>
    image.data.some(
      (dataItem) => dataItem.nasa_id.toLowerCase() === id.toLowerCase(),
    ),
  );
}
