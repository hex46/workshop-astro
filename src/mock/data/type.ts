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