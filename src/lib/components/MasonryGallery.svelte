<script>
  import Image from "$lib/components/Image.svelte";

  /**
   * items: Array of { image?: any, alt?: string, href?: string, title?: string, description?: string }
   * orientation: 'vertical' | 'horizontal' - vertical uses CSS columns; horizontal uses horizontal scroll cards
   */
  export let items = [];
  export let orientation = "horizontal";

  const fallbackImages = [
    "/ArtKilling.svg",
    "/ArtKill-light.svg",
    "/favicon.svg",
  ];

  function getImage(item, idx) {
    return item?.image || fallbackImages[idx % fallbackImages.length];
  }

  function isSanityImage(image) {
    return image && typeof image === "object" && image._type;
  }
</script>

<div class="container mx-auto">
  {#if orientation === "vertical"}
    <!-- Vertical masonry via CSS columns -->
    <div class="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-2">
      {#each items as item, idx}
        <a href={item?.href || "#"} class="mb-4 break-inside-avoid block group">
          {#if isSanityImage(getImage(item, idx))}
            <Image
              url={getImage(item, idx)}
              alt={item?.alt || item?.title || "Image"}
            />
          {:else}
            <img
              src={getImage(item, idx)}
              alt={item?.alt || item?.title || "Image"}
              class="w-full h-auto"
            />
          {/if}
        </a>
      {/each}
    </div>
  {:else}
    <!-- Horizontal masonry: single scrollable container with 3 flex rows -->
    <div class="overflow-x-auto pb-2 snap-x snap-mandatory">
      <div class="flex flex-col gap-4 min-w-max">
        {#each Array(3) as _, rowIndex}
          <div class="flex gap-4">
            {#each items.filter((_, idx) => idx % 3 === rowIndex) as item, idx}
              <a
                href={item?.href || "#"}
                class="snap-start flex-none group relative"
              >
                <div class="relative">
                  {#if isSanityImage(getImage(item, idx))}
                    <Image
                      url={getImage(item, idx)}
                      alt={item?.alt || item?.title || "Image"}
                    />
                  {:else}
                    <img
                      src={getImage(item, idx)}
                      alt={item?.alt || item?.title || "Image"}
                      class="max-h-[28vh] object-contain"
                    />
                  {/if}
                  <!-- Hover Overlay -->
                  <div
                    class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                  >
                    <div class="text-center text-white p-4">
                      {#if item?.title}
                        <h3 class="font-['Anton'] text-lg mb-2">
                          {item.title}
                        </h3>
                      {/if}
                      <div
                        class="flex items-center justify-center gap-2 text-sm"
                      >
                        <span>View Project</span>
                        <svg
                          class="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            {/each}
          </div>
        {/each}
      </div>
    </div>
  {/if}
</div>
