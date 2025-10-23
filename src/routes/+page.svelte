<script>
  let { data } = $props();
  const {
    settings,
    page,
    photography,
    categories,
    articles,
    poetryAndSpokenWord,
  } = $derived(data);
  const { content } = $derived(page);

  import SEO from "$lib/components/SEO.svelte";
  import MasonryGallery from "$lib/components/MasonryGallery.svelte";
  import { generateStructuredDataHTML } from "$lib/utils/structuredData";
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
  const photographyCategory = $derived(
    categories.find((cat) => cat.slug === "photography")
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

<svelte:head>
  {@html generateStructuredDataHTML("website", {
    title: settings?.title || "Art Killing Apathy",
    description:
      settings?.description ||
      "A platform dedicated to exploring the intersection of art, activism, and social change",
  })}
</svelte:head>

<HeroGeo transformedWords={data.words} />

<StickyNav />

<!-- Photography Section -->
<section id="photography" class="py-16">
  <Banner
    title={photographyCategory?.title}
    description={photographyCategory?.description}
  />
  <!-- photography Masonry Gallery (first section) -->
  {#if photography?.length}
    <MasonryGallery
      items={photography.map((p) => ({
        image: p.image,
        alt: p.alt,
        title: p.title,
        description: p.description,
        href: `/art/${p.slug}`,
      }))}
      orientation="horizontal"
    />
  {/if}
  <div class="py-16 bg-[var(--headerBackground)] mt-2">
    <div class="max-w-4xl mx-auto px-6 text-center">
      <h2 class="text-4xl lg:text-5xl font-bold mb-6">Let's Create Together</h2>
      <p
        class="text-lg lg:text-xl mb-8 text-[var(--textSecondary)] max-w-3xl mx-auto"
      >
        Art thrives in collaboration. Whether you're a fellow artist,
        storyteller, activist, or creative soul with a vision that challenges
        the status quo, I'm always interested in exploring meaningful
        partnerships that push boundaries and spark conversations.
      </p>
      <p
        class="text-base lg:text-lg mb-10 text-[var(--textSecondary)] max-w-2xl mx-auto"
      >
        From multimedia projects that blend photography with poetry, to
        documentary work that amplifies unheard voices, to creative campaigns
        that challenge apathy—let's discuss how we can make art that matters
        together.
      </p>
      <div
        class="max-w-max mx-auto bg-[var(--background)] p-8 rounded-lg border border-[var(--primary)] text-[var(--textColor)]"
      >
        <p class="font-display text-lg font-medium mb-4">
          Ready to collaborate?
        </p>
        <a
          href="mailto:eleanor@artkillingpathy.com?subject=Collaboration Inquiry"
          class="inline-block py-4 text-[var(--primary)] rounded-lg font-light text-lg hover:underline transition-all duration-300"
        >
          eleanor@artkillingpathy.com
        </a>
        <p class="text-sm mt-4">
          Include your project idea, timeline, and how you envision our
          collaboration
        </p>
      </div>
    </div>
  </div>
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
  <div
    class="mx-auto px-6 py-32 lg:p-12 lg:bg-[var(--headerBackground)] bg-[var(--background)]"
  >
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

<!-- Poetry -->
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
<section id="film-video" class="pb-32">
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

<!-- Book -->
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
