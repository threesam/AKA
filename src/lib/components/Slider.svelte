<script>
  import Image from "$lib/components/Image.svelte";

  /**
   * items: Array of objects with title, slug, image, publishedAt, etc.
   */
  let { items = [] } = $props();

  // Helper function to check if image is Sanity image object
  function isSanityImage(image) {
    return image && typeof image === "object" && image._type;
  }

  // Format date for display
  function formatDate(dateString) {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  }
</script>

{#if items.length > 0}
  <div class="article-slider w-full">
    <!-- Horizontal scroll container -->
    <div class="flex overflow-x-auto gap-4 px-4 pb-4">
      <div class="flex gap-4 min-w-max">
        {#each items as item}
          <a
            href="/art/{item.slug}"
            class="w-80 flex-shrink-0 bg-[var(--headerBackground)] rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
          >
            <!-- Image Section -->
            <div class="relative aspect-square">
              {#if item.image}
                {#if isSanityImage(item.image)}
                  <Image
                    url={item.image}
                    alt={item.alt || item.title}
                  />
                {:else}
                  <img
                    src={item.image}
                    alt={item.alt || item.title}
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                {/if}
              {:else}
                <div
                  class="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center"
                >
                  <svg
                    class="w-16 h-16 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              {/if}
            </div>

            <!-- Content Section -->
            <div class="p-6">
              <h3
                class="text-xl font-['Anton'] text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-[var(--primary)] transition-colors duration-200"
              >
                {item.title}
              </h3>
              <p class="text-sm text-gray-500 dark:text-gray-400">
                {formatDate(item.publishedAt)}
              </p>
            </div>
          </a>
        {/each}
      </div>
    </div>
  </div>
{/if}

<style>
  /* Hide scrollbar but keep functionality */
  .article-slider ::-webkit-scrollbar {
    display: none;
  }

  .article-slider {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
</style>
