<script>
  import { blur } from "svelte/transition";
  import SEO from "$lib/components/SEO.svelte";
  import Banner from "$lib/components/Banner.svelte";
  import ParticleCanvas from "$lib/components/ParticleCanvas.svelte";
  import BackButton from "$lib/components/BackButton.svelte";
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

<div class="fixed inset-0 -z-10">
  <ParticleCanvas />
</div>

<section class="py-8 bg-[var(--background)]/40 backdrop-blur-sm">
  <div class="max-w-4xl mx-auto">
    <!-- Go back button -->
    <BackButton />

    <div class="px-6">
      <Banner
        title="About"
        description="Learn about Art Killing Apathy and Eleanor Goldfield"
        position="left"
      />
    </div>

    <div class="content prose prose-lg">
      <div class="mb-8">
        <div class="flex gap-4 mb-6 px-6">
          <button
            class={selected === "aka" ? "selected" : ""}
            onclick={() => (selected = "aka")}>About This Site</button
          >
          <button
            class={selected === "eleanor" ? "selected" : ""}
            onclick={() => (selected = "eleanor")}>About Eleanor</button
          >
        </div>

        {#if selected === "aka"}
          <div in:blur>
            <PortableText value={aka.excerpt} />
          </div>
        {:else if selected === "eleanor"}
          <div in:blur>
            <PortableText value={author.bio} />
          </div>
        {/if}
      </div>
    </div>
  </div>
</section>

<style>
  button {
    background: none;
    border: 0.125rem solid transparent;
    border-bottom: 0.125rem solid var(--textColor);
    color: var(--textColor);
    font-weight: bold;
    padding: 0.5rem 1rem;
    transition: all 0.3s ease-in-out;
    box-shadow: none;
    cursor: pointer;
  }

  .selected {
    transition: all 0.3s ease-in-out;
    border-bottom: 0.125rem solid var(--primary);
  }
</style>
