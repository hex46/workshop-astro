export interface NasaImage {
  href: string;
  data: NasaImageData[];
  links: NasaImageLink[];
}

export interface NasaImageData {
  center: string;
  title: string;
  keywords?: string[];
  nasa_id: string;
  date_created: string;
  media_type: string;
  description?: string;
  description_508?: string;
  secondary_creator?: string;
  location?: string;
  album?: string[];
  photographer?: string;
}

export interface NasaImageLink {
  href: string;
  rel: string;
  render: string;
}
