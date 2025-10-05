<script>
  let { data } = $props();
  const { settings, posts, categories } = data.data;

  import { slide } from "svelte/transition";

  // Components
  import SEO from "$lib/components/SEO.svelte";
  import ListCard from "$lib/components/ListCard.svelte";

  // Using Svelte 5 runes
  let selected = $state({
    title: "",
    slug: "",
    description: "",
  });

  let visiblePostsLength = $state(10);

  const slugs = posts.map((word) => word.slug);

  // Derived state for filtered posts
  let filteredPosts = $derived(
    posts.filter((post) => {
      if (selected.slug) {
        return post.categories.includes(selected.slug);
      } else {
        return post;
      }
    })
  );

  // Derived state for showing more button
  let showMoreButton = $derived(filteredPosts.length > 9);

  // Functions for handling category selection
  function selectAll() {
    selected = {
      title: "",
      slug: "",
      description: "",
    };
  }

  function selectCategory(category) {
    selected = {
      slug: category.slug,
      title: category.title,
      description: category.description,
    };
  }

  function loadMore() {
    visiblePostsLength += 10;
  }
</script>

<SEO
  title="Art"
  description="The collected works of Eleanor Goldfield"
  {...settings}
/>

<main>
  <section>
    <h1>My Art</h1>
    <!-- CATEGORIES -->
    <ul class="flex">
      <li>
        <button
          class="umami--click--category-all {!selected.slug ? 'selected' : ''}"
          onclick={selectAll}>all</button
        >
      </li>
      {#each categories.filter((category) => category.slug !== "uncategorized") as { slug, title, description }, i}
        <li>
          <button
            class="umami--click--category-{slug} {selected.slug === slug
              ? 'selected'
              : ''}"
            onclick={() => selectCategory({ slug, title, description })}
            >{title.toLowerCase()}</button
          >
        </li>
      {/each}
    </ul>

    {#if selected.description && filteredPosts.length}
      <h2>{selected.title}</h2>
      <p in:slide><em>{selected.description}</em></p>
    {/if}
  </section>

  <!-- POSTS -->
  <section class="content-section">
    <ul>
      {#each filteredPosts.slice(0, visiblePostsLength) as post, i (post.id)}
        <ListCard data={post} {i} />
      {:else}
        {#if selected.slug}
          <li>
            No posts in <em class="primary">{selected.title.toLowerCase()}</em>
          </li>
        {:else}
          <li>No posts to display</li>
        {/if}
      {/each}
    </ul>
    {#if showMoreButton}
      <button
        class="umami--click--{visiblePostsLength}-more-{selected.slug}"
        onclick={loadMore}>show more</button
      >
    {/if}
  </section>
  {#each slugs as slug}
    <a
      aria-hidden="true"
      style="position: absolute; visibility: hidden;"
      href="art/{slug}">{slug}</a
    >
  {/each}
</main>

<style>
  main {
    min-height: 100vh;
    padding: 3rem var(--containerPadding);
  }
  section {
    max-width: 40rem;
    margin: 0 auto;
  }

  h1 {
    margin: 3rem 0 1rem 0;
  }

  h2 {
    font-size: var(--h5);
  }
  .primary {
    color: var(--primary);
  }

  .flex {
    justify-content: flex-start;
    flex-wrap: wrap;
    margin-bottom: 0;
  }
  .flex li {
    margin: 0 0.5rem 0.5rem 0;
  }

  .search {
    display: relative;
    height: 2rem;
    width: 100%;
  }
  .empty-button {
    background: none;
    border: none;
    outline: none;
    padding: 0;
    /* margin: 0 0.25rem 0 0; */
    box-shadow: none;
    color: inherit;
    /* display: block; */
    /* position: absolute; */

    z-index: 20;
  }

  .empty-button:focus {
    color: var(--primary);
  }

  ul.flex {
    margin: 0.5rem 0;
  }

  button {
    background: none;
    border: 0.125rem solid transparent;
    border-radius: 0;
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

  .content-section {
    padding-top: var(--containerPadding);
  }
</style>
