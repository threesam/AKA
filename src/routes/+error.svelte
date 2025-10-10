<script>
  import ParticleCanvas from "$lib/components/ParticleCanvas.svelte";

  let { error, status } = $props();

  const isDevelopment = process.env.NODE_ENV === "development";
</script>

<svelte:head>
  <title>{status}</title>
</svelte:head>

<main class="relative">
  <ParticleCanvas />
  <h1>Uh oh</h1>

  <p>{status}</p>

  {#if isDevelopment && error}
    <pre>{error}</pre>
  {/if}
</main>

<style>
  h1,
  p {
    margin: 0 auto;
  }

  h1 {
    font-size: 2.8em;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }

  p {
    margin: 1em auto;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
</style>
