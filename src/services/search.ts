import { stars } from "@/mock/data/stars.ts";

export const prerender = false;

export type NasaCollection = {
  collection: {
      version: string;
      href: string;
      items: NasaItem[];
      metadata: CollectionMetadata;
      links?: PaginationLink[];
  };
};
export type NasaItem = {
  href: string;
  data: NasaData[];
  links: ResourceLink[];
};
type NasaData = {
  center: string;
  title: string;
  nasa_id: string;
  date_created: string;
  media_type: "image" | "video";
  description?: string;
  description_508?: string;
  keywords?: string[];
  secondary_creator?: string;
  album?: string[];
  location?: string;
  photographer?: string;
};
type ResourceLink = {
  href: string;
  rel: string;
  render?: string;
};
type CollectionMetadata = {
  total_hits: number;
};
type PaginationLink = {
  rel: string;
  prompt: string;
  href: string;
};


const nasaImages: NasaCollection = stars;

export async function search(query?: string): Promise<NasaItem[]> {
  if(import.meta.env.DEV) {
    const response = await fetch(`https://images-api.nasa.gov/search?q=${query}&page_size=100&media_type=image`);
    const data = await response.json() as NasaCollection
    return data.collection.items
  }
  return query === undefined
    ? nasaImages.collection.items
    : nasaImageQueryOnKeyword(query);
}

function nasaImageQueryOnKeyword(query: string): NasaItem[] | PromiseLike<NasaItem[]> {
  return nasaImages.collection.items.filter(
      (item) => item.data.some(
        data => data.keywords?.some(
          keyword => keyword.toLowerCase().includes(query.toLowerCase())
        )
      )
  );
}

export async function findByNasaId(id: string): Promise<NasaItem | undefined> {
  if(import.meta.env.ENV !== "DEV") {
    const response = await fetch(`https://images-api.nasa.gov/search?nasa_id=${id}`);
    const data = await response.json() as NasaCollection
    return data.collection.items[0]
  }
  return nasaImages.collection.items.find(
      (item) => item.data.some(
        data => data.nasa_id.toLowerCase() === id.toLowerCase()
      )
  );
}
