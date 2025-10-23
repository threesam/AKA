<script>
  import "../app.css";

  import Footer from "$lib/components/Footer.svelte";
  import DeployButton from "$lib/components/DeployButton.svelte";

  let { children, data } = $props();
</script>

<main>
  {@render children()}
</main>

<Footer transformedWords={data.words} />

<DeployButton />
