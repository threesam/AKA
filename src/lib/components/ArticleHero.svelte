<script>
  import { onMount } from "svelte";
  import { scale } from "svelte/transition";

  let { data } = $props();
  const { image: src, alt } = data;

  let show = $state(false);
  onMount(() => (show = true));
</script>

{#if show && src}
  <section class="relative h-[50vh] w-full overflow-hidden shadow-lg">
    <img
      in:scale={{ duration: 2000, start: 1.2, opacity: 0.2 }}
      {src}
      {alt}
      class="absolute top-0 left-0 object-cover w-full h-full -z-10"
    />
  </section>
{/if}
