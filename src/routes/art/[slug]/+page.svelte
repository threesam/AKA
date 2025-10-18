<script>
  import { format, parseISO } from "date-fns";
  import BackButton from "$lib/components/BackButton.svelte";
  import Banner from "$lib/components/Banner.svelte";
  import CtaButton from "$lib/components/CtaButton.svelte";
  import { generateStructuredDataHTML } from "$lib/utils/structuredData";
  import PortableText from "$lib/components/PortableText.svelte";
  import { randomSort } from "$lib/utils";
  import { scale } from "svelte/transition";
  import SEO from "$lib/components/SEO.svelte";
  import Slider from "$lib/components/Slider.svelte";

  let { data } = $props();
  const { post, articles, poetryAndSpokenWord } = $derived(data);
  const isPoem = $derived(post?.tags?.includes("poem"));
</script>

<svelte:head>
  {#if post}
    {@html generateStructuredDataHTML("article", {
      title: post.title,
      description: post.description,
      image: post.image,
      alt: post.alt,
      publishedAt: post.publishedAt,
      author: post.author,
      tags: post.tags,
      category: post.category,
      url: `/art/${post.slug}`,
    })}
  {/if}
</svelte:head>

{#if post}
  <SEO {...post} />

  <div>
    <!-- Full bleed hero image -->
    {#if post.image}
      {#key post.image && post.alt && post.title}
        <section
          class="relative h-[50vh] w-full overflow-hidden shadow-lg bg-[var(--background)]"
        >
          <img
            in:scale={{ duration: 2000, start: 1.1, opacity: 0.2 }}
            src={post.image + "?auto=format&quality=90&h=600"}
            alt={post.alt || post.title || "Image"}
            class="absolute top-0 left-0 object-cover w-full h-full"
            loading="lazy"
            decoding="async"
          />
        </section>
      {/key}
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
