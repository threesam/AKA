<script>
  import { PortableText } from "@portabletext/svelte";
  import FeaturedMedia from "./portabletext/FeaturedMedia.svelte";
  import VideoUrl from "./portabletext/VideoUrl.svelte";
  import Cta from "./portabletext/Cta.svelte";
  import AuthorRef from "./portabletext/AuthorRef.svelte";
  import LineBreak from "./portabletext/LineBreak.svelte";
  import LinkMark from "./portabletext/LinkMark.svelte";

  let { value, ...props } = $props();

  const components = {
    types: {
      featuredMedia: FeaturedMedia,
      image: FeaturedMedia,
      videoUrl: VideoUrl,
      cta: Cta,
      authorReference: AuthorRef,
      lineBreak: LineBreak,
    },
    marks: {
      link: LinkMark,
    },
  };
</script>

<PortableText {value} {components} {...props} />
