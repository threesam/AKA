<script>
  let { data } = $props();
  const { post } = data ?? {};

  import { format, parseISO } from "date-fns";
  import BlockContent from "@movingbrands/svelte-portable-text";
  import serializers from "$lib/components/serializers";
  import Hero from "$lib/components/Hero.svelte";
  import Container from "$lib/components/Container.svelte";
  import SEO from "$lib/components/SEO.svelte";
  import Cta from "$lib/components/Cta.svelte";
</script>

{#if post}
  <SEO {...post} />

  <Hero data={{ title: post.title, image: post.image, alt: post.alt }} />

  <Container>
    <section class="content {post.tags?.includes('poem') ? 'poem' : ''}">
      {#if post.author}
        <p>
          {format(parseISO(post.publishedAt), "yyyy-MM-dd")}<br />by
          <a href="/about">{post.author}</a>
        </p>
      {/if}
      <BlockContent blocks={post.body} {serializers} />
      {#if post.cta}
        <Cta {...post.cta} />
      {/if}
    </section>
  </Container>
{/if}

<style>
  p {
    font-size: var(--smallText);
  }
</style>
