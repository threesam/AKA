<script>
  import SvelteSeo from "svelte-seo";
  import { urlFor } from "$lib/utils/sanity";
  import { page } from "$app/stores";

  const SEO_IMAGE_WIDTH = 1200;
  const SEO_IMAGE_HEIGHT = 1200;
  const TWITTER_IMAGE_HEIGHT = 628;

  const host = "https://artkillingapathy.com";

  let {
    title = "ArtKillingApathy",
    description = "",
    publishedAt = "",
    image = "https://cdn.sanity.io/images/qcht0vh1/production/ced38505e9a21f744a3e36afb02ec89b8b28c4af-1888x945.png",
    alt = "",
    tags = [],
    type = "website",
  } = $props();
</script>

{#if type !== "website"}
  <SvelteSeo
    title={title ?? ""}
    description={description ?? ""}
    openGraph={{
      title: title ?? "",
      description: description ?? "",
      url: host + $page.url.pathname,
      type: "article",
      article: {
        publishedTime: publishedAt ?? "",
        authors: ["https://www.artkillingapathy.com/about"],
        tags: tags ?? [],
      },
      images: image
        ? [
            {
              url: urlFor(image)
                .width(SEO_IMAGE_WIDTH)
                .height(SEO_IMAGE_HEIGHT)
                .url(),
              width: SEO_IMAGE_WIDTH,
              height: SEO_IMAGE_HEIGHT,
              alt: alt ?? "",
            },
          ]
        : [],
    }}
    twitter={{
      title: title ?? "",
      description: description ?? "",
      image: image
        ? urlFor(image)
            .width(SEO_IMAGE_WIDTH)
            .height(TWITTER_IMAGE_HEIGHT)
            .url()
        : "",
      imageAlt: alt,
    }}
  />
{:else}
  <SvelteSeo
    title={title ?? ""}
    description={description ?? ""}
    openGraph={{
      title: title ?? "",
      description: description ?? "",
      url: host + $page.url.pathname,
      type: "website",
      images: image
        ? [
            {
              url: urlFor(image)
                .width(SEO_IMAGE_WIDTH)
                .height(SEO_IMAGE_HEIGHT)
                .url(),
              width: SEO_IMAGE_WIDTH,
              height: SEO_IMAGE_HEIGHT,
              alt: alt ?? "",
            },
          ]
        : "",
    }}
    twitter={{
      title: title ?? "",
      description: description ?? "",
      image: image
        ? urlFor(image)
            .width(SEO_IMAGE_WIDTH)
            .height(TWITTER_IMAGE_HEIGHT)
            .url()
        : "",
      imageAlt: alt ?? "",
    }}
  />
{/if}
