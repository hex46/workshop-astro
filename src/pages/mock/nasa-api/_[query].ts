import type { NasaItem } from "@/type/NasaType.ts";
import { nasaCollection } from "@/content/search/data.ts";

const mapToLowercase = (keyword: string) => keyword.toLowerCase();

function findByQuery(query: string) {
  const getByKeywords = (nasaItem: NasaItem) =>
    nasaItem.data[0].keywords?.map(mapToLowercase).includes(query);

  const getByNasaId = (nasaItem: NasaItem) =>
    nasaItem.data[0].nasa_id.toLowerCase() === query;

  const filterNasaItem = (nasaItem: NasaItem) =>
    getByKeywords(nasaItem) || getByNasaId(nasaItem);

  return nasaCollection.collection.items.filter(filterNasaItem);
}

// @ts-ignore
export async function GET({ params }) {
  const query = params.query.toLowerCase();

  const nasaItem = findByQuery(query);
  if (!!nasaItem) return new Response(JSON.stringify(nasaItem));
  else
    return new Response(null, {
      status: 404,
      statusText: "Not found",
    });
}
