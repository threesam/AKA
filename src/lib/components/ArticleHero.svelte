<script>
  import { onMount } from "svelte";
  import { scale } from "svelte/transition";

  import { urlFor } from "$lib/utils/sanity";

  let w;
  let h;
  function parentWidth(node) {
    w = node.parentElement.clientWidth;
    h = node.parentElement.clientHeight;
  }

  export let data;
  const { image: src, alt } = data;

  let show = false;
  onMount(() => (show = true));
</script>

{#if show && src}
  <section>
    <img
      use:parentWidth
      in:scale={{ duration: 2000, start: 1.2, opacity: 0.2 }}
      src={urlFor(src)
        .width(w)
        .height(h)
        .fit("crop")
        .crop("entropy")
        .auto("format")
        .url()}
      {alt}
    />
  </section>
{/if}

<style>
  section {
    position: relative;
    height: 50vh;
    width: 100%;
    overflow: hidden;
    box-shadow: var(--level-1);
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
    width: 100%;
    height: 100%;
    z-index: -10;
  }
</style>
