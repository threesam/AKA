import { client } from "$lib/utils/sanity";

export async function load() {
  // Pull photojournalism-tagged posts for homepage masonry
  const photojournalism = /* groq */ `*[_type == 'post' && 'photojournalism' in categories[]->slug.current]|order(publishedAt desc)[0...24]{
    "id": _id,
    "slug": slug.current,
    title,
    "image": featuredMedia.asset->url,
    "alt": featuredMedia.alt,
    publishedAt
  }`;

  // Keep existing page content for Featured Art section
  const page = /* groq */ `*[_type == 'page'][0]{
    "content": content[]->{
      title,
      "description": excerpt[0].children[0].text,
      cta,
      "slug": slug.current,
      order,
      publishedAt,
      "image": featuredMedia.asset->url,
      "alt": featuredMedia.alt,
      "categories": categories[]->
    }
  }`;

  const categories = /* groq */ `*[_type == "category"]|order(order asc){"slug": slug.current, title, description, order}`;

  // Pull articles for slider
  const articles = /* groq */ `*[_type == 'post' && ('articles' in categories[]->slug.current)]|order(publishedAt desc){
    "id": _id,
    "slug": slug.current,
    title,
    "image": featuredMedia.asset->url,
    "alt": featuredMedia.alt,
    publishedAt
  }`;

  // Pull poetry and spoken word for slider
  const poetryAndSpokenWord = /* groq */ `*[_type == 'post' && ('poetry-and-spoken-word' in categories[]->slug.current)]|order(publishedAt desc){
    "id": _id,
    "slug": slug.current,
    title,
    "image": featuredMedia.asset->url,
    "alt": featuredMedia.alt,
    publishedAt
  }`;

  const query = `{
    "categories": ${categories},
    "photojournalism": ${photojournalism},
    "articles": ${articles},
    "poetryAndSpokenWord": ${poetryAndSpokenWord},
    "page": ${page}
  }`;

  const data = await client.fetch(query);

  return {
    ...data,
  };
}
