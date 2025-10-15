<script>
  import Image from "$lib/components/Image.svelte";

  let { items = [] } = $props();

  const fallbackImages = [
    "/ArtKilling.svg",
    "/ArtKill-light.svg",
    "/favicon.svg",
  ];

  function getImage(item, idx) {
    return item?.image || fallbackImages[idx % fallbackImages.length];
  }
</script>

<div class="overflow-x-auto pb-2 snap-x snap-mandatory">
  <ul class="flex flex-col gap-4 min-w-max">
    {#each Array(3) as _, rowIndex}
      <li class="flex pl-4 last:pr-4 gap-4">
        {#each items.filter((_, idx) => idx % 3 === rowIndex) as item, idx}
          <a
            href={item?.href || "#"}
            class="flex-none group relative snap-start snap-always"
          >
            <div class="relative">
              <img
                src={getImage(item, idx) + "?auto=format&quality=90&h=450"}
                alt={item?.alt || item?.title || "Image"}
                class="max-h-[28vh] object-contain"
                loading="lazy"
                decoding="async"
              />
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
                  <div class="flex items-center justify-center gap-2 text-sm">
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
      </li>
    {/each}
  </ul>
</div>
