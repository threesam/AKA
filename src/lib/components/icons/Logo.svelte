<script>
  let { classes = "w-full" } = $props();

  import { darkMode } from "$lib/utils/darkMode";
</script>

<div>
  {#if $darkMode}
    <img
      class={classes}
      src="/ArtKill-light.svg"
      alt="full logo for art killing apathy"
      fetchpriority="high"
      loading="eager"
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
  {:else}
    <img
      class={classes}
      src="/ArtKilling.svg"
      alt="full logo for art killing apathy"
      fetchpriority="high"
      loading="eager"
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
  {/if}
</div>
