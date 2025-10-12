<script>
  let { data } = $props();
  const { post } = $derived(data);

  import { format, parseISO } from "date-fns";
  import serializers from "$lib/components/serializers";
  import SEO from "$lib/components/SEO.svelte";
  import Cta from "$lib/components/Cta.svelte";
  import BlockContent from "@movingbrands/svelte-portable-text";
  import { urlFor } from "$lib/utils/sanity";

  // Check if post has poem tag for special styling
  const isPoem = $derived(post?.tags?.includes("poem"));
</script>

{#if post}
  <SEO {...post} />

  <main>
    <!-- Full bleed hero image -->
    {#if post.image}
      <section class="relative h-[50vh] w-full overflow-hidden">
        <img
          src={urlFor(post.image)
            .width(1920)
            .height(1080)
            .fit("crop")
            .crop("entropy")
            .auto("format")
            .url()}
          alt={post.alt || post.title}
          class="absolute inset-0 w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-black/20"></div>
        <div
          class="relative h-full flex items-center justify-center text-center px-6"
        >
          <h1
            class="text-4xl md:text-6xl lg:text-7xl font-display text-white max-w-4xl leading-tight"
          >
            {post.title}
          </h1>
        </div>
      </section>
    {:else}
      <!-- Title only section -->
      <section class="py-24 px-6">
        <div class="max-w-4xl mx-auto">
          <h1
            class="text-4xl md:text-6xl lg:text-7xl font-display text-gray-900 dark:text-white leading-tight"
          >
            {post.title}
          </h1>
        </div>
      </section>
    {/if}

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
