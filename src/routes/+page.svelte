<script>
  let { data } = $props();
  const {
    settings,
    page,
    photojournalism,
    categories,
    articles,
    poetryAndSpokenWord,
  } = $derived(data);
  const { content } = $derived(page);

  import SEO from "$lib/components/SEO.svelte";
  import MasonryGallery from "$lib/components/MasonryGallery.svelte";
  import Card from "$lib/components/Card.svelte";
  import Video from "$lib/components/Video.svelte";
  import Banner from "$lib/components/Banner.svelte";
  import ThreeAcross from "$lib/components/ThreeAcross.svelte";
  import Substack from "$lib/components/Substack.svelte";
  import Book from "$lib/components/Book.svelte";
  import HeroGeo from "$lib/components/HeroGeo.svelte";
  import StickyNav from "$lib/components/StickyNav.svelte";
  import Slider from "$lib/components/Slider.svelte";

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

  // Find podcast projects
  const podcasts = $derived(
    content.filter((item) =>
      item.categories.find((cat) => cat.slug.current === "podcasts")
    )
  );

  // Find Substack project
  const substackProject = $derived(
    content.find(
      (item) =>
        item.title.toLowerCase().includes("substack") ||
        item.description?.toLowerCase().includes("substack") ||
        item.categories.find((cat) => cat.slug.current === "substack")
    )
  );

  // Find Paradigm Lost project
  const paradigmLost = $derived(
    content.find((item) => item.title.toLowerCase().includes("paradigm lost"))
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
  const podcastCategory = $derived(
    categories.find((cat) => cat.slug === "podcasts")
  );
  const articleCategory = $derived(
    categories.find((cat) => cat.slug === "articles")
  );
  const poetryCategory = $derived(
    categories.find((cat) => cat.slug === "poetry-and-spoken-word")
  );
</script>

<SEO {...settings} />

<HeroGeo transformedWords={data.words} />

<StickyNav />

<section id="photojournalism" class="py-32">
  <Banner
    title={photojournalismCategory?.title}
    description={photojournalismCategory?.description}
  />
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

<!-- Articles Section -->
<section id="articles" class="pb-32">
  <Banner
    title={articleCategory?.title}
    description={articleCategory?.description}
  />
  {#if articles?.length}
    <Slider items={articles} />
  {/if}
</section>

<!-- Substack Section -->
<section id="substack" class="pb-32">
  <Banner
    title="Newsletter"
    description="Stay updated with our latest thoughts, insights, and behind-the-scenes content delivered directly to your inbox."
  />
  {#if substackProject}
    <Substack project={substackProject} />
  {/if}
</section>

<!-- Music Projects Section -->
<section id="music" class="pb-32">
  <!-- Section Title -->
  <Banner
    title={musicCategory?.title}
    description={musicCategory?.description}
  />

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
  <div class="mx-auto p-6 lg:p-12 bg-[var(--headerBackground)]">
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

<!-- Poetry and Spoken Word Section -->
<section id="poetry-and-spoken-word" class="pb-32">
  <Banner
    title={poetryCategory?.title}
    description={poetryCategory?.description}
  />
  {#if poetryAndSpokenWord?.length}
    <Slider items={poetryAndSpokenWord} />
  {/if}
</section>

<!-- Movies Section -->
<section id="film-video" class="movies-section">
  <!-- Section Title -->
  <Banner
    title={moviesCategory?.title}
    description={moviesCategory?.description}
  />

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

<!-- Paradigm Lost Section -->
<section id="book" class="pb-32">
  <Banner
    title="Paradigm Lost"
    description="A deep dive into shifting perspectives and lost paradigms."
  />
  {#if paradigmLost}
    <Book
      book={{
        title: paradigmLost.title,
        description: paradigmLost.description,
        image: paradigmLost.image,
        alt: paradigmLost.alt,
        cta: paradigmLost.cta,
        slug: paradigmLost.slug,
      }}
    />
  {/if}
</section>

<!-- Podcasts Section -->
<section id="podcasts" class="pb-32">
  <Banner
    title={podcastCategory?.title}
    description={podcastCategory?.description}
  />
  {#if podcasts?.length}
    <ThreeAcross {podcasts} />
  {/if}
</section>
