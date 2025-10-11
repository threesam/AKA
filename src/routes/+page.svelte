<script>
  let { data } = $props();
  const { settings, page, photojournalism } = data;
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
</script>

<SEO {...settings} />

<main>
  <Banner title="Photojournalism" size="md" />
  <!-- Photojournalism Masonry Gallery (first section) -->
  {#if photojournalism?.length}
    <section>
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
    </section>
  {/if}

  <!-- Music Projects Section -->
  <section class="music-projects">
    <div class="container mx-auto px-4 py-16">
      <!-- Section Title -->
      <Banner title="Music" size="md" />

      <!-- No Solo Project Card -->
      {#if noSoloProject}
        <div class="mb-16">
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
        </div>
      {/if}

      <!-- Music Video -->
      <div class="mb-16">
        <div class="mx-auto">
          <Video
            url="https://player.vimeo.com/video/569573712"
            title="No Solo - Music Video"
          />
        </div>
      </div>

      <!-- No Solo Vinyl Card -->
      {#if noSoloVinyl}
        <div class="mb-16">
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
        </div>
      {/if}
    </div>
  </section>

  <!-- Movies Section -->
  <section class="movies-section">
    <div class="container mx-auto px-4 py-16">
      <!-- Section Title -->
      <Banner title="Movies" size="md" />

      <!-- Movies Grid -->
      <div class="space-y-16">
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
      </div>
    </div>
  </section>

  <section class="w-full min-h-screen">
    <Banner title="Featured Art" size="lg" />
    <ul class="max-w-4xl mx-auto">
      {#each content as { title, slug, cta, image, alt, description }}
        <li
          class="w-full flex flex-col md:flex-row justify-start mb-12 md:odd:flex-row-reverse md:odd:justify-start md:odd:text-right"
        >
          <div class="w-full md:w-1/2">
            <Image rounded url={image} {alt} />
          </div>
          <div class="p-4 md:p-8 md:w-1/2">
            <h3 class="text-2xl font-['Anton'] mb-2 mt-0">{title}</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
            <div
              class="flex flex-col md:flex-row gap-4 mb-16 md:odd:flex-row-reverse md:odd:justify-start"
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
</main>
