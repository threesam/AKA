import { client } from "$lib/utils/sanity";

export async function load() {
  const siteSettings = /* groq */ `*[_type == "siteSettings"][0]{
    title,
    description,
    tags,
    "image": image.asset->url, 
    "alt": image.alt, 
    wordCloud{
      "shape": shape[0],
      uselessWords
    }
  }`;

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

  const query = `{
    "categories": ${categories},
    "settings": ${siteSettings},
    "photojournalism": ${photojournalism},
    "page": ${page}
  }`;

  const data = await client.fetch(query);

  return {
    ...data,
  };
}
