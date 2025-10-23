<script>
  import { fade } from "svelte/transition";
  import { onMount } from "svelte";

  let { url, title = "archived video from ArtKillingApathy" } = $props();

  let videoLoaded = $state(false);
  let container = $state();

  onMount(() => {
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoLoaded = true;
            observer.unobserve(container);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "200px",
      }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  });
</script>

<div bind:this={container} class="aspect-video w-full relative">
  <!-- Fallback placeholder during loading or if url is undefined -->
  {#if !videoLoaded || !url}
    <div
      class="absolute inset-0 bg-[var(--background)] flex items-center justify-center"
    >
      <div class="text-center text-[var(--textColor)]">
        <svg
          class="w-16 h-16 mx-auto mb-2"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
            clip-rule="evenodd"
          />
        </svg>
        <p class="text-sm">{url ? "Loading video..." : "Video unavailable"}</p>
      </div>
    </div>
  {/if}

  <!-- Video iframe that fades in when loaded -->
  {#if videoLoaded && url}
    <iframe
      class="inset-0 absolute w-full h-full bg-[var(--background)]"
      src={url}
      frameborder="0"
      {title}
      allowfullscreen
      in:fade={{ duration: 500 }}
    ></iframe>
  {/if}
</div>
