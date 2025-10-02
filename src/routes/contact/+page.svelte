<script>
  import Contact from "$lib/components/Contact.svelte";
  import SEO from "$lib/components/SEO.svelte";
  import ParticleCanvas from "$lib/components/ParticleCanvas.svelte";
</script>

<SEO title="Contact" description="Social links for Art Killing Apathy" />

<main>
  <ParticleCanvas />
  <section>
    <Contact />
  </section>
</main>

<style>
  section {
    display: grid;
    place-content: center;
    min-height: calc(100vh - var(--headerHeight));
    width: 100%;
    position: relative;
    overflow: hidden;
    padding: 4rem 1rem;
  }
</style>
