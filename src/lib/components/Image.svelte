<script>
  import { urlFor } from "$lib/utils/sanity";

  let { url, alt = "", caption, rounded = false } = $props();

  let width = $state(0);
  let loaded = $state(false);
  let thisImage = $state(null);

  function parentWidth(node) {
    width = node.parentElement.clientWidth;
  }

  $effect(() => {
    if (thisImage) {
      thisImage.onload = () => {
        loaded = true;
      };
    }
  });
</script>

<figure
  class="m-0 relative {rounded ? 'overflow-hidden' : ''}"
  use:parentWidth
  {width}
>
  <img
    {width}
    src={urlFor(url).width(width).auto("format").url()}
    bind:this={thisImage}
    {alt}
    loading="lazy"
    decoding="async"
    data-loaded={loaded}
    class="brightness-90 relative transition-opacity duration-[1200ms] ease-out w-full h-full data-[loaded=true]:opacity-100"
  />
  {#if caption}
    <figcaption class="m-0 mx-auto text-sm max-w-2xl px-6 pb-6 pt-0">
      <em>{caption}</em>
    </figcaption>
  {/if}
</figure>
