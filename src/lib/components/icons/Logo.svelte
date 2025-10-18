<script>
  let { classes = "w-full" } = $props();

  import { darkMode } from "$lib/utils/darkMode";
</script>

<div>
  <img
    class={classes}
    src={$darkMode ? "/ArtKill-light.svg" : "/ArtKilling.svg"}
    alt="full logo for art killing apathy"
    fetchpriority="high"
    loading="eager"
  />
</div>
