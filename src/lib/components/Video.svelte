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
  <!-- Video iframe that fades in when loaded -->
  {#if videoLoaded}
    <iframe
      class="inset-0 absolute w-full h-full"
      src={url}
      frameborder="0"
      {title}
      allowfullscreen
      in:fade={{ duration: 500 }}
    ></iframe>
  {/if}
</div>
