<script>
  let { items = [] } = $props();
</script>

<div class="overflow-x-auto pb-2 snap-x snap-mandatory">
  <ul class="flex flex-col gap-4 min-w-max">
    {#each Array(3) as _, rowIndex}
      <li class="flex pl-4 last:pr-4 gap-4">
        {#each items.filter((_, idx) => idx % 3 === rowIndex) as item, idx}
          <a
            href={item?.href || "#"}
            class="flex-none group relative snap-start snap-always"
            data-sveltekit-preload-data="tap"
          >
            <div class="relative">
              {#if item.image}
                <img
                  src={item.image + "?auto=format&quality=90&h=450"}
                  alt={item?.alt || item?.title || "Image"}
                  class="max-h-[28vh] object-contain"
                  loading="lazy"
                  decoding="async"
                  crossorigin="anonymous"
                  referrerpolicy="no-referrer"
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
                      d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.794L4.617 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.617l3.766-3.794a1 1 0 011 .07zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              {/if}
              <!-- Hover Overlay -->
              <div
                class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
              >
                <div class="text-center text-white p-4">
                  {#if item?.title}
                    <h3 class="font-display text-lg mb-2">
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
