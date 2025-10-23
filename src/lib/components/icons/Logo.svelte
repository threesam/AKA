<script>
  let { classes = "w-full" } = $props();
</script>

<div class="logo-container">
  <!-- Dark mode logo -->
  <img
    class="{classes} dark-logo"
    src="/ArtKill-light.svg"
    alt="full logo for art killing apathy"
    fetchpriority="high"
    loading="eager"
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
  />
  <!-- Light mode logo -->
  <img
    class="{classes} light-logo"
    src="/ArtKilling.svg"
    alt="full logo for art killing apathy"
    fetchpriority="high"
    loading="eager"
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
  />
</div>

<style>
  .logo-container {
    position: relative;
  }

  .dark-logo {
    display: none;
  }

  .light-logo {
    display: block;
  }

  @media (prefers-color-scheme: dark) {
    .dark-logo {
      display: block;
    }

    .light-logo {
      display: none;
    }
  }
</style>
