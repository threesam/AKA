<script>
  let { data } = $props();
  const { post } = $derived(data);

  import { format, parseISO } from "date-fns";
  import serializers from "$lib/components/serializers";
  import SEO from "$lib/components/SEO.svelte";
  import Cta from "$lib/components/Cta.svelte";
  import Banner from "$lib/components/Banner.svelte";
  import ArticleHero from "$lib/components/ArticleHero.svelte";
  import BackButton from "$lib/components/BackButton.svelte";
  import BlockContent from "@movingbrands/svelte-portable-text";

  // Check if post has poem tag for special styling
  const isPoem = $derived(post?.tags?.includes("poem"));
</script>

{#if post}
  <SEO {...post} />

  <main>
    <!-- Full bleed hero image -->
    {#if post.image}
      <ArticleHero
        data={{
          image: post.image + "?auto=format&crop=entropy",
          alt: post.alt || post.title,
        }}
      />
    {/if}

    <!-- Title banner -->
    <div class="border-b border-t border-[var(--lineColor)] px-6">
      <Banner title={post.title} position="center" />
    </div>

    <!-- Go back button -->
    <BackButton class="lg:max-w-[42rem] mx-auto" />

    <!-- Content section -->
    <section class="content max-w-4xl mx-auto px-6 py-8">
      <div class="prose prose-lg max-w-none {isPoem ? 'prose-poem' : ''}">
        {#if post.author}
          <div class="mb-8 text-gray-600 dark:text-gray-300">
            <p>
              {format(parseISO(post.publishedAt), "yyyy-MM-dd")}<br />
              by
              <a href="/about" class="text-[var(--primary)] hover:underline"
                >{post.author}</a
              >
            </p>
          </div>
        {/if}

        <BlockContent blocks={post.body} {serializers} />

        {#if post.cta}
          <div class="mt-8">
            <Cta {...post.cta} />
          </div>
        {/if}
      </div>
    </section>
  </main>
{/if}
