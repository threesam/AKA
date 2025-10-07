import { client } from "$lib/utils/sanity";

export const prerender = true;

export async function load() {
  try {
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

    const words = /* groq */ `*[_type == "post"]{title, "title": body[0].children[0].text}`;

    const query = `{
      "settings": ${siteSettings},
      "words": ${words}
    }`;

    const data = await client.fetch(query);

    return {
      data: data || {
        settings: { wordCloud: { uselessWords: [] } },
        words: [],
      },
    };
  } catch (error) {
    console.error("Error loading layout data:", error);
    return {
      data: { settings: { wordCloud: { uselessWords: [] } }, words: [] },
    };
  }
}
