<script>
  export let home = false;

  import { darkMode } from "$lib/utils/darkMode";
</script>

<div class="lg:hidden">
  {#if $darkMode}
    <img src="/favicon-light.svg" alt="logo for art killing apathy" />
  {:else if !$darkMode}
    <img src="/favicon.svg" alt="logo for art killing apathy" />
  {/if}
</div>

<div class="hidden lg:block">
  {#if $darkMode}
    <img
      class:home
      src="/ArtKill-light.svg"
      alt="full logo for art killing apathy"
    />
  {:else if !$darkMode}
    <img
      class:home
      src="/ArtKilling.svg"
      alt="full logo for art killing apathy"
    />
  {/if}
</div>

<style>
  img {
    height: 1.5rem;
    padding-bottom: 0.25rem;
    width: inherit;
  }

  .home {
    width: 100%;
    height: auto;
  }
</style>
