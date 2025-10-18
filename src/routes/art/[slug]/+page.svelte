<script>
  let { data } = $props();
  const { post, articles, poetryAndSpokenWord } = $derived(data);

  import { format, parseISO } from "date-fns";
  import SEO from "$lib/components/SEO.svelte";
  import Slider from "$lib/components/Slider.svelte";
  import CtaButton from "$lib/components/CtaButton.svelte";
  import Banner from "$lib/components/Banner.svelte";
  import ArticleHero from "$lib/components/ArticleHero.svelte";
  import BackButton from "$lib/components/BackButton.svelte";
  import { PortableText } from "@portabletext/svelte";
  import { randomSort } from "$lib/utils";
  // Check if post has poem tag for special styling
  const isPoem = $derived(post?.tags?.includes("poem"));
</script>

{#if post}
  <SEO {...post} />

  <div>
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
    <section class="content max-w-4xl mx-auto px-6 pt-8 pb-8">
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

        <PortableText value={post.body} />
      </div>
    </section>
    <div class="mt-8 py-8 border-t border-b border-[var(--lineColor)]">
      {#if post.cta}
        <div
          class="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <CtaButton
            type={post.cta.secondary ? "secondary" : "primary"}
            size="lg"
            href={post.cta.url}
            target={post.cta.external ? "_blank" : null}
            rel={post.cta.external ? "noopener noreferrer" : null}
          >
            {post.cta.text}
          </CtaButton>

          {#if post.cta.secondary && post.slug}
            <CtaButton type="secondary" size="lg" href="/art/{post.slug}">
              Learn More
            </CtaButton>
          {/if}
        </div>
      {:else}
        <!-- If no CTA, show a "finished" message -->
        <div
          class="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <h2 class="text-2xl font-bold">färdig</h2>
        </div>
      {/if}
    </div>
  </div>
  {#if isPoem && poetryAndSpokenWord.length > 0}
    <div class="mt-16">
      <Banner title="Other Poetry and Spoken Word" />
      <Slider
        items={randomSort(
          poetryAndSpokenWord.filter((item) => item.slug !== post.slug)
        )}
      />
    </div>
  {:else if articles.length > 0}
    <div class="mt-16">
      <Banner title="Other Articles" />
      <Slider
        items={randomSort(articles.filter((item) => item.slug !== post.slug))}
      />
    </div>
  {/if}
{/if}
