<script>
  import { blur } from "svelte/transition";
  import SEO from "$lib/components/SEO.svelte";
  import PortableText from "$lib/components/PortableText.svelte";
  import { generateStructuredDataHTML } from "$lib/utils/structuredData";

  let { data } = $props();
  let selected = $state("aka");
  const { aka, image, author } = data.data;
</script>

<SEO
  title="About"
  description="Information about ArtKillingApathy and Eleanor Goldfield"
  {image}
/>

<svelte:head>
  {@html generateStructuredDataHTML("webpage", {
    title: "About",
    description: "Information about ArtKillingApathy and Eleanor Goldfield",
    image: image,
    url: "/about",
  })}
</svelte:head>

<section class="">
  <div class="container">
    <h1 class="text-4xl! font-bold">About</h1>
    <button
      class={selected === "aka" ? "selected" : ""}
      onclick={() => (selected = "aka")}>this site</button
    >
    <button
      class={selected === "eleanor" ? "selected" : ""}
      onclick={() => (selected = "eleanor")}>eleanor</button
    >
  </div>

  {#if selected === "aka"}
    <div in:blur class="content">
      <PortableText value={aka.excerpt} />
    </div>
  {:else if selected === "eleanor"}
    <div in:blur class="content">
      <PortableText value={author.bio} />
    </div>
  {/if}
</section>

<style>
  .container {
    padding: 0 var(--containerPadding);
  }
  section {
    max-width: 40rem;
    margin: 0 auto;
    position: relative;
  }

  .content {
    position: relative;
  }
  button {
    background: none;
    border: 0.125rem solid transparent;
    border-bottom: 0.125rem solid var(--textColor);
    color: var(--textColor);
    font-weight: bold;
    padding: 0.5rem;
    transition: all 0.3s ease-in-out;
    box-shadow: none;
  }

  .selected {
    transition: all 0.3s ease-in-out;
    border-bottom: 0.125rem solid var(--primary);
    /* border-left: 0.125rem dashed var(--primary);
		border-right: 0.125rem solid var(--primary); */
  }

  .content {
    padding-right: 0;
    padding-left: 0;
    padding-top: 0.5rem;
  }
</style>
