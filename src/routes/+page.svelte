<script>
  let { data } = $props();
  const { settings, page, photojournalism, categories } = data;
  const { content } = page;

  import Image from "$lib/components/Image.svelte";
  import Cta from "$lib/components/Cta.svelte";
  import SEO from "$lib/components/SEO.svelte";
  import MasonryGallery from "$lib/components/MasonryGallery.svelte";
  import Card from "$lib/components/Card.svelte";
  import Video from "$lib/components/Video.svelte";
  import Banner from "$lib/components/Banner.svelte";

  // Find No Solo project and vinyl
  const noSoloProject = $derived(
    content.find((item) => item.title === "No Solo")
  );
  const noSoloVinyl = $derived(
    content.find(
      (item) => item.title.includes("Vinyl") || item.title.includes("vinyl")
    )
  );

  // Find movie projects
  const toTheTrees = $derived(
    content.find((item) => item.title === "To The Trees")
  );
  const hardRoadOfHope = $derived(
    content.find((item) => item.title === "Hard Road of Hope")
  );

  // Find categories for banners
  const photojournalismCategory = $derived(
    categories.find((cat) => cat.slug === "photojournalism")
  );
  const musicCategory = $derived(
    categories.find((cat) => cat.slug === "music")
  );
  const moviesCategory = $derived(
    categories.find((cat) => cat.slug === "film-video")
  );
  const featuredArtCategory = $derived(
    categories.find((cat) => cat.slug === "featured-art")
  );
</script>

<SEO {...settings} />

<section id="photojournalism">
  <Banner category={photojournalismCategory} />
  <!-- Photojournalism Masonry Gallery (first section) -->
  {#if photojournalism?.length}
    <MasonryGallery
      items={photojournalism.map((p) => ({
        image: p.image,
        alt: p.alt,
        title: p.title,
        description: p.description,
        href: `/art/${p.slug}`,
      }))}
      orientation="horizontal"
    />
  {/if}
</section>

<!-- Music Projects Section -->
<section id="music-projects">
  <!-- Section Title -->
  <Banner category={musicCategory} />

  <!-- No Solo Project Card -->
  {#if noSoloProject}
    <Card
      product={{
        title: noSoloProject.title,
        description: noSoloProject.description,
        image: noSoloProject.image,
        alt: noSoloProject.alt,
        url: noSoloProject.cta.url,
        slug: noSoloProject.slug,
      }}
      flipped={false}
    />
  {/if}

  <!-- Music Video -->
  <div class="mx-auto">
    <Video
      url="https://player.vimeo.com/video/569573712"
      title="No Solo - Music Video"
    />
  </div>

  <!-- No Solo Vinyl Card -->
  {#if noSoloVinyl}
    <Card
      product={{
        title: noSoloVinyl.title,
        description: noSoloVinyl.description,
        image: noSoloVinyl.image,
        alt: noSoloVinyl.alt,
        url: noSoloVinyl.cta.url,
        slug: noSoloVinyl.slug,
      }}
      flipped={true}
    />
  {/if}
</section>

<!-- Movies Section -->
<section class="movies-section">
  <!-- Section Title -->
  <Banner category={moviesCategory} />

  <!-- Movies Grid -->

  <!-- Hard Road of Hope -->
  {#if hardRoadOfHope}
    <div class="movie-card">
      <Card
        product={{
          title: hardRoadOfHope.title,
          description: hardRoadOfHope.description,
          image: hardRoadOfHope.image,
          alt: hardRoadOfHope.alt,
          url: hardRoadOfHope.cta?.url,
          slug: hardRoadOfHope.slug,
        }}
        flipped={false}
        primaryCtaText="Watch Now"
        secondaryCtaText="Learn More"
      />
    </div>
  {/if}

  <!-- To The Trees -->
  {#if toTheTrees}
    <div class="movie-card">
      <Card
        product={{
          title: toTheTrees.title,
          description: toTheTrees.description,
          image: toTheTrees.image,
          alt: toTheTrees.alt,
          url: toTheTrees.cta?.url,
          slug: toTheTrees.slug,
        }}
        flipped={true}
        primaryCtaText="Watch Now"
        secondaryCtaText="Learn More"
      />
    </div>
  {/if}
</section>

<section class="w-full">
  <Banner category={featuredArtCategory} />
  <ul class="max-w-4xl mx-auto">
    {#each content as { title, slug, cta, image, alt, description }}
      <li
        class="w-full flex flex-col lg:flex-row justify-start mb-12 lg:odd:flex-row-reverse lg:odd:justify-start lg:odd:text-right"
      >
        <div class="w-full lg:w-1/2">
          <Image rounded url={image} {alt} />
        </div>
        <div class="p-4 lg:p-8 lg:w-1/2">
          <h3 class="text-2xl font-['Anton'] mb-2 mt-0">{title}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
          <div
            class="flex flex-col lg:flex-row gap-4 mb-16 lg:odd:flex-row-reverse lg:odd:justify-start"
          >
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
