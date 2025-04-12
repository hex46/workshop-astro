import { nasaCollection } from "@/content/search/data.ts";

export async function GET() {
  return new Response(JSON.stringify(nasaCollection.collection.items));
}
