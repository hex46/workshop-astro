import type { NasaItem } from "@/type/NasaType.ts";
import { nasaCollection } from "@/content/search/data.ts";

function findNasaItemOrNotFound(nasaId: string) {
  const filterNasaItem = (nasaItem: NasaItem) =>
    nasaItem.data[0].nasa_id === nasaId;
  return nasaCollection.collection.items.find(filterNasaItem);
}

// @ts-ignore
export async function GET({ params }) {
  const nasaId = params.nasaId;
  const nasaItem = findNasaItemOrNotFound(nasaId);
  if (nasaItem) return new Response(JSON.stringify(nasaItem));
  else
    return new Response(null, {
      status: 404,
      statusText: "Not found",
    });
}
