import { client } from "$lib/utils/sanity";
import { transform } from "$lib/utils/transform";

export const prerender = false;

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
      "settings": ${siteSettings},
      "words": ${words},
      "articles": ${articles},
      "poetryAndSpokenWord": ${poetryAndSpokenWord}
    }`;

    const data = await client.fetch(query);

    return {
      settings: data.settings,
      words:
        data.words && data.settings?.wordCloud?.uselessWords
          ? transform(data.words, data.settings.wordCloud.uselessWords)
          : [],
      articles: data.articles,
      poetryAndSpokenWord: data.poetryAndSpokenWord,
    };
  } catch (error) {
    console.error("Error loading layout data:", error);
    return {
      settings: { wordCloud: { uselessWords: [] } },
      words: [],
      articles: [],
      poetryAndSpokenWord: [],
    };
  }
}
