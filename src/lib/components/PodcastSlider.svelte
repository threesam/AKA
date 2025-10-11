<script>
  import Image from "$lib/components/Image.svelte";
  import CtaButton from "$lib/components/CtaButton.svelte";

  /**
   * podcasts: Array of podcast objects with title, description, image, etc.
   */
  let { podcasts = [] } = $props();

  // Helper function to check if image is Sanity image object
  function isSanityImage(image) {
    return image && typeof image === "object" && image._type;
  }
</script>

{#if podcasts.length > 0}
  <div class="podcast-grid w-full max-w-7xl mx-auto px-4">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each podcasts as podcast}
        <div
          class="bg-white dark:bg-gray-900 shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
          <!-- Image Section -->
          <div class="relative aspect-square">
            {#if podcast.image}
              {#if isSanityImage(podcast.image)}
                <Image url={podcast.image} alt={podcast.alt || podcast.title} />
              {:else}
                <img
                  src={podcast.image}
                  alt={podcast.alt || podcast.title}
                  class="w-full h-full object-contain"
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
                    d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.794L4.617 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.617l3.766-3.794a1 1 0 011 .07zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            {/if}
          </div>

          <!-- Content Section -->
          <div class="p-6">
            <h3
              class="text-xl font-['Anton'] text-gray-900 dark:text-white mb-3 line-clamp-2"
            >
              {podcast.title}
            </h3>
            <p
              class="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed line-clamp-3"
            >
              {podcast.description || "Listen to this podcast episode."}
            </p>

            <!-- CTA Buttons -->
            <div class="space-y-3">
              {#if podcast.cta?.url}
                <CtaButton
                  type="primary"
                  size="md"
                  href={podcast.cta.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Listen Now
                </CtaButton>
              {/if}

              <CtaButton type="secondary" size="md" href="/art/{podcast.slug}">
                Learn More
              </CtaButton>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
{/if}
