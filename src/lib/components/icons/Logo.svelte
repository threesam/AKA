<script>
  let { classes = "w-full" } = $props();

  import { darkMode } from "$lib/utils/darkMode";
</script>

<div class="lg:hidden">
  <img
    class="max-h-10"
    src={$darkMode ? "/favicon-light.svg" : "/favicon.svg"}
    alt="logo for art killing apathy"
  />
</div>

<div class="hidden lg:block">
  <img
    class={classes}
    src={$darkMode ? "/ArtKill-light.svg" : "/ArtKilling.svg"}
    alt="full logo for art killing apathy"
  />
</div>
