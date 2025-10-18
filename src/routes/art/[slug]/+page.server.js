import { client } from "$lib/utils/sanity";

export async function load({ params: { slug } }) {
  const query = /* groq */ `*[_type == "post" && slug.current == $slug][0]{
    title,
    cta{
      url,
      text,
      title,
      secondary,
      external,
      target
    },
    "image": featuredMedia.asset->url,
    "alt": featuredMedia.alt,
    "palette": featuredMedia.asset->metadata.palette.darkMuted.background,
    "description": excerpt[0].children[0].text,
    body[]{
      ...,
      _type == "featuredMedia" => {
        ...,
        asset->
      },
      _type == "image" => {
        ...,
        asset->
      },
      _type == "videoUrl" => {
        ...,
        url
      },
      _type == "cta" => {
        ...,
        url,
        text,
        title,
        secondary,
        external,
        target
      },
      _type == "authorReference" => {
        ...,
        author->
      },
      _type == "lineBreak" => {
        ...,
        type
      },
      markDefs[]{
        ...,
        _type == "link" => {
          ...,
          href,
          blank
        }
      }
    },
    body,
    publishedAt,
    "author": authors[0]->name,
    "tags": tags[]->slug.current
  }`;

  const post = await client.fetch(query, { slug });

  console.log(post.body);

  return {
    post,
  };
}
