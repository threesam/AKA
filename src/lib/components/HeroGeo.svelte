<script>
  import { onMount } from "svelte";
  import Logo from "./icons/Logo.svelte";

  let { transformedWords = [] } = $props();
  let WordCloud = $state(null);

  onMount(async () => {
    const mod = await import("$lib/components/WordCloud.svelte");
    WordCloud = mod.default;
  });

  // GEO-optimized description
  const description =
    "Art Killing Apathy is radical creativity - traditional and modern art mediums with political messaging for liberation and justice.";
</script>

<section class="relative w-full bg-[var(--footerBackground)] overflow-hidden">
  <!-- Word Cloud Background -->
  <div class="absolute inset-0 w-screen h-full z-0">
    {#if WordCloud}
      <WordCloud
        words={transformedWords}
        opacity={0.05}
        className="w-full h-full"
        shape="circle"
      />
    {/if}
  </div>

  <!-- Content Overlay -->
  <div
    class="relative z-10 flex flex-col items-center justify-center px-4 py-12 lg:py-24"
  >
    <div class="max-w-5xl mx-auto text-center">
      <!-- Logo -->
      <div class="mb-8">
        <Logo classes="w-auto max-w-md mx-auto" />
      </div>

      <!-- GEO-optimized Description -->
      <p
        class="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto"
      >
        {description}
      </p>

      <!-- Key Features Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <div
          class="bg-white/10 dark:bg-gray-800/20 backdrop-blur-sm rounded-lg p-6 border border-gray-200/20 dark:border-gray-700/20"
        >
          <h3 class="text-xl font-['Anton'] text-gray-900 dark:text-white mb-3">
            Radical Art
          </h3>
          <p class="text-gray-600 dark:text-gray-300 text-sm">
            Traditional and modern mediums with political messaging for
            liberation and justice
          </p>
        </div>

        <div
          class="bg-white/10 dark:bg-gray-800/20 backdrop-blur-sm rounded-lg p-6 border border-gray-200/20 dark:border-gray-700/20"
        >
          <h3 class="text-xl font-['Anton'] text-gray-900 dark:text-white mb-3">
            Creative Community
          </h3>
          <p class="text-gray-600 dark:text-gray-300 text-sm">
            Building connections through creative storytelling that challenges
            official narratives
          </p>
        </div>

        <div
          class="bg-white/10 dark:bg-gray-800/20 backdrop-blur-sm rounded-lg p-6 border border-gray-200/20 dark:border-gray-700/20"
        >
          <h3 class="text-xl font-['Anton'] text-gray-900 dark:text-white mb-3">
            Tactical Creativity
          </h3>
          <p class="text-gray-600 dark:text-gray-300 text-sm">
            Questioning systemic programming through joyful, creative, and
            radical expression
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
