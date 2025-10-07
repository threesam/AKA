<script>
  export let data;
  const { words, settings, page } = data.data;
  const { content } = page;

  import Image from "$lib/components/Image.svelte";
  import Cta from "$lib/components/Cta.svelte";
  import SEO from "$lib/components/SEO.svelte";
  import ParticleCanvas from "$lib/components/ParticleCanvas.svelte";
  import { darkMode } from "$lib/utils/darkMode";
</script>

<SEO {...settings} />

<main>
  <!-- Particle Background -->
  <div class="relative h-screen w-screen">
    <div
      class="absolute inset-0 {$darkMode ? 'bg-black/15' : 'bg-white/15'} z-10"
    ></div>

    <div class="logo z-20">
      <img
        src={$darkMode ? "ArtKill-light.svg" : "ArtKilling.svg"}
        alt="full logo for art killing apathy"
      />
    </div>

    <ParticleCanvas />
  </div>

  <section class="projects">
    <h2>Featured Art</h2>
    <ul>
      {#each content as { title, slug, cta, image, alt, description }}
        <li>
          <div class="image">
            <Image rounded url={image} {alt} />
          </div>
          <div class="text">
            <h3>{title}</h3>
            <p>{description}</p>
            <div class="ctas">
              {#if cta}
                <Cta {...cta} />
              {/if}
              <Cta
                secondary="true"
                url={`art/${slug}`}
                text="Learn More"
                {slug}
              />
            </div>
          </div>
        </li>
      {/each}
    </ul>
  </section>
</main>

<style>
  section {
    width: 100%;
    min-height: 100vh;
  }

  .logo {
    position: absolute;
    width: 100%;
    max-width: 56rem;
    padding: var(--containerPadding);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
  }

  h2 {
    text-align: center;
    font-size: var(--bigH);
    width: 100%;
    padding: 2rem;
    margin-top: 0;
    margin-bottom: 2rem;
    /* background: var(--primary); */
    border-top: 2px solid var(--primary);
    border-bottom: 2px solid var(--primary);
    color: var(--primary);
  }
  .text {
    padding: var(--containerPadding);
  }

  .text h3 {
    margin-top: 0;
  }

  .ctas {
    display: flex;
    margin-bottom: 4rem;
  }

  h3 {
    margin-bottom: 0.5rem;
  }

  .projects ul {
    max-width: 56rem;
    margin: 0 auto;
  }

  @media (max-width: 767px) {
    h2 {
      font-size: var(--h1);
    }

    .text {
      padding-top: 0;
    }
  }

  @media (min-width: 768px) {
    h2 {
      font-size: var(--bigH);
    }
    li {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      margin-bottom: 3rem;
    }
    li:nth-child(even) {
      flex-direction: row-reverse;
      justify-content: flex-start;
      text-align: right;
    }

    li:nth-child(even) .ctas {
      flex-direction: row-reverse;
      justify-content: flex-start;
    }

    li .image,
    li .text {
      width: 50%;
    }

    li h3 {
      margin-top: 0;
    }
  }
</style>
