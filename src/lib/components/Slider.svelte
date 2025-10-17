<script>
  /**
   * items: Array of objects with title, slug, image, publishedAt, etc.
   */
  let { items = [] } = $props();

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
    <div class="flex overflow-x-auto gap-4 px-4 pb-4 snap-x snap-mandatory">
      <ul class="flex min-w-max">
        {#each Array.from( { length: Math.ceil(items.length / 2) }, (_, pairIndex) => {
            const startIndex = pairIndex * 2;
            const pair = items.slice(startIndex, startIndex + 2);
            return { pair, pairIndex };
          } ) as { pair, pairIndex }}
          <li
            class="w-80 flex-shrink-0 flex flex-col snap-start snap-always gap-4 pl-4 last:pr-4"
          >
            {#each pair as item}
              <a
                href="/art/{item.slug}"
                class="relative bg-[var(--headerBackground)] rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
              >
                <!-- Image Section -->
                <div class="relative aspect-square">
                  {#if item.image}
                    <img
                      src={item.image +
                        "?auto=format&quality=90&h=350&w=350&crop=entropy"}
                      alt={item.alt || item.title}
                      class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      decoding="async"
                    />
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

                  <!-- Content Overlay -->
                  <div
                    class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4"
                  >
                    <h3
                      class="text-lg font-['Anton'] text-white mb-1 line-clamp-2 group-hover:text-[var(--primary)] transition-colors duration-200"
                    >
                      {item.title}
                    </h3>
                    <p class="text-xs text-gray-300">
                      {formatDate(item.publishedAt)}
                    </p>
                  </div>
                </div>
              </a>
            {/each}
          </li>
        {/each}
      </ul>
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
